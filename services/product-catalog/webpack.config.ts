import path from 'path';
import webpack from 'webpack';
import {buildWebpack, BuildMode, BuildPaths} from '@packages/build-config'
import packageJson from './package.json';

interface EnvVariables {
    port?: number;
    mode?: BuildMode;
    STORE_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const STORE_REMOTE_URL = env.STORE_REMOTE_URL ?? 'http://localhost:1339'

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'product',
        filename: 'remoteEntry.js',
        exposes: {
            './Product': './src/components/App/App',
        },
        remotes: {
            store: `store@${STORE_REMOTE_URL}/remoteEntry.js`
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            },
            mobx: {
                eager: true,
                requiredVersion: packageJson.dependencies['mobx'],
            },
            "mobx-react": {
                eager: true,
                requiredVersion: packageJson.dependencies['mobx-react'],
            }
        },
    }))

    return config;
}