import uglify from '@lopatnov/rollup-plugin-uglify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


export default {
	input: 'js/client/theme.js',
	output: {
		file: 'theme.min.js',
		format: 'iife',
	},
	plugins: [
		uglify(),
		nodeResolve(),
		commonjs()
	],
};
