const path = require('path')  // import path module 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports ={
    mode: 'development',   // use in development stage,  another example: production, none 
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js')   // __dirname => get absolute path where webpack.config.js located in  
    }, // can add multipme entry point by bundle: filename  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', 
        clean: true, // keep file only one 
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map', 
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true, 
        hot: true, 
        compress: true, 
        historyApiFallback: true, 
    }, 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/resource'
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html', 
        }),
        //new BundleAnalyzerPlugin(), 
    ], 
}


