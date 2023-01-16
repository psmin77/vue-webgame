const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                },
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    devServer: { // 안됐는데 되는 이유...? 프로젝트랑 컴퓨터 재부팅하고 모듈 재설치해서 된 것으로 추측
        devMiddleware: {publicPath: '/dist'},
        static: {directory: path.resolve(__dirname)},
        open: true,
        port: 'auto',
        hot: true
    }
};
