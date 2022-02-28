const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prod = 'development';

const config = {
	mode: prod,
	entry: {
		app: './src/js/app'
	},
	output: {
		path: path.resolve('build'),
		filename: 'js/bundle.js',
		clean: true,
		chunkFilename: 'js/bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false } },
					"postcss-loader"
				],
			},
		],
	},
	optimization: {
		minimize: prod==='development' ? false : true,
		minimizer: [
			new ESBuildMinifyPlugin({
				css: true
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
	],
	mode: prod ? 'production' : 'development',
	stats: prod ? 'normal' : 'minimal'
};

module.exports = config;
