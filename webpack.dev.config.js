var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry:'./src/app.js',
	output:{
		path:__dirname+'/dist',
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'node_modules'),
				include:[
					path.resolve(__dirname,'src')
				]
			},{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/.(png|gif|jpg|svg)$/,
				use:['file-loader']
			},
			{
				test:/.(woff|woff2|eot|ttf|otf)$/,
				use:['file-loader']
			},{
				test:/.vue$/,
				use:['vue-loader']
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		}),
		//new CleanWebpackPlugin('dist'),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		// require时省略的扩展名
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer: {
		contentBase: './dist', // 本地服务器所加载的页面所在的目录
		// historyApiFallback: true, // 不跳转
		// inline: true, // 实时刷新
		hot: true,
		// publicPath: "",
		// https: true
	},
}