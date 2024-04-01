import { Configuration, webpack } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";

export function buildPlugins({mode, paths}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    return [
        new HtmlWebpackPlugin({template: paths.html}),
        // isDev && new webpack.ProgressPlugin(),
    ]
}