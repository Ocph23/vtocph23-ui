// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// eslint-disable-next-line no-undef
module.exports = {
    configureWebpack: {
        plugins: [new MiniCssExtractPlugin()],
    }
};