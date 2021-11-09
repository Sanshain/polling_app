//@ts-check
import babel from '@rollup/plugin-babel'

import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

import typescript from 'rollup-plugin-typescript2';

import alias from '@rollup/plugin-alias';
import es3 from 'rollup-plugin-es3';
import commonjs from "@rollup/plugin-commonjs";

const release = true

export default {
	input: `./source/state.js`,
	output: {
		file: `./release/state.js`,
		format: 'iife',
		sourcemap: true,
		name: 'states'
	},
	plugins: [
		alias({
			entries: [
				{ find: 'react/hooks', replacement: 'preact/hooks' },
				{ find: 'react', replacement: 'preact/compat' },
				{ find: 'react-dom', replacement: 'preact/compat' }
			]
		}),
		resolve({
			browser: true,
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
		}),
		// babel({
		// 	exclude: 'node_modules/**'
		// }),		
		// typescript({
		// 	typescript: require('typescript')
		// }),				
		commonjs(),
		// es3(),
		release && terser()
	]
}


