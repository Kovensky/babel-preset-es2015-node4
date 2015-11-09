module.exports = {
	plugins: [
		require('babel-plugin-transform-es2015-sticky-regex'),
		require('babel-plugin-transform-es2015-unicode-regex'),
		require('babel-plugin-transform-es2015-spread'),
		require('babel-plugin-transform-es2015-parameters'),
		require('babel-plugin-transform-es2015-destructuring'),
		require('babel-plugin-transform-es2015-typeof-symbol'),
		require('babel-plugin-transform-es2015-modules-commonjs'),
		[require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }]
	]
}