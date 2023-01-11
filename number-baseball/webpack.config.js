const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: { // 여러 개의 스크립트를 통합해서 관리하는 하나의 메인 스크립트
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: { // 메인 스크립트를 사용하기 위해 설정하는 파일 이름과 경로
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
};
