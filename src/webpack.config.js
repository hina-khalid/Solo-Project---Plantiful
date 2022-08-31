const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// webpack where to start bundling the javascript files, 
// specify the entry property
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"), // tell webpack to create the final bundled file in dist folder in the root of the project
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3000,
    },
    module: {
        rules: [ // tell webpack to transpile javascript files using babel before bundling them. To do that we need to define some rules for the module bundling.
            {
                test: /\.?js$/, // test property identifies which file or files should be transformed.
                exclude: /node_modules/,
                use: { // use property indicates which loader should be used to do the transforming.
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
    ],
}