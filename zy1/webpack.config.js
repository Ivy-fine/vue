const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devServer: {
        open: true,
        port: 9292
    },
    module: {
        rules: [{
            test: /.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /.(png|jps|gif|svg)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" })
    ]
}