import path from 'path';
import webpack from 'webpack';
import {buildWebpack, BuildMode, BuildPaths} from '@packages/build-config'
import packageJson from './package.json';

interface EnvVariables {
    port?: number;
    mode?: BuildMode;
    PRODUCT_REMOTE_URL?: string;
    STORE_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const PRODUCT_REMOTE_URL = env.PRODUCT_REMOTE_URL ?? 'http://localhost:3001'
    const STORE_REMOTE_URL = env.STORE_REMOTE_URL ?? 'http://localhost:1339'

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            product: `product@${PRODUCT_REMOTE_URL}/remoteEntry.js`,
            store: `store@${STORE_REMOTE_URL}/remoteEntry.js`
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            // 'react-router-dom': {
            //     eager: true,
            //     requiredVersion: packageJson.dependencies['react-router-dom'],
            // },
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