var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
	entry:'./src/app.js',
	output:{
		path:__dirname+'/dist',
		filename:'app.bundle.js'
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
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}