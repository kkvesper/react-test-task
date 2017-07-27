var config = require('febone-kit/lib/webpack.config');

config.module.loaders.push({
    test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
    loader: 'file-loader?name=/assets/[name].[sha512:hash:base64:7].[ext]&publicPath=/page'
}, {
    test: /\.json$/,
    loader: 'json-loader'
});

module.exports = config;
