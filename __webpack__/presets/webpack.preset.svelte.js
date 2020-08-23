const path       = require('path');
/**
 * @param env {Object}
 * @param env.mode {String} - production | development
 */
module.exports = env => {
	return {
		resolve: {
			alias     : {
				svelte: path.resolve('node_modules', 'svelte')
			},
			extensions: ['.mjs', '.js', '.svelte'],
			mainFields: ['svelte', 'browser', 'module', 'main']
		},
		module : {
			rules: [
				{
					test   : /\.svelte$/,
					exclude: /node_modules/,
					use    : {
						loader: 'svelte-loader',
						options: {
							emitCss: true
						}
					},
				}
			]
		}
	}
}
