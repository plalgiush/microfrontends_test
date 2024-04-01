// const { ModuleFederationPlugin } = require('webpack').container;
import path from 'path';
import webpack from 'webpack';
import {buildWebpack, BuildMode, BuildPaths} from '@packages/build-config'
import packageJson from './package.json';

interface EnvVariables {
    port?: number;
    mode?: BuildMode;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src') 
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 1339,
        mode: env.mode ?? 'development',
        paths
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
      name: 'store',
      filename: 'remoteEntry.js',
      library: { type: 'global', name: 'store' },
      exposes: {
        './Store': './src/app',
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
      }
    }))

    return config;
}

// module.exports = {
//   entry: path.resolve(__dirname, 'src', 'index.ts'),
//   mode: 'development',
//   output: {
//     publicPath: 'auto',
//   },
//   devServer: {
//     port: 1339,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'store',
//       filename: 'remoteEntry.js',
//       library: { type: 'global', name: 'store' },
//       exposes: {
//         './Store': './src/app',
//       },
//       shared: {
//         ...packageJson.dependencies,
//         react: {
//             eager: true,
//             requiredVersion: packageJson.dependencies['react'],
//         },
//         'react-dom': {
//             eager: true,
//             requiredVersion: packageJson.dependencies['react-dom'],
//         },
//         mobx: {
//             eager: true,
//             requiredVersion: packageJson.dependencies['mobx'],
//         },
//         "mobx-react": {
//             eager: true,
//             requiredVersion: packageJson.dependencies['mobx-react'],
//         }
//       }
//     }),
//   ],
// };