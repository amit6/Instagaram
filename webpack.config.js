module.exports= {
	entry:'./js/instagaram.js',
	output: {
		path: __dirname+'/',
		filename: 'build.js'
	},
	devServer: {
		inline: true,
		port: 7777
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react', 'stage-2']
				}
			}
		]
	}
}