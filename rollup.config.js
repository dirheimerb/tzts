import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import tsConfigPaths from 'rollup-plugin-ts-paths';
import inject from '@rollup/plugin-inject';
import builtins from 'rollup-plugin-node-builtins';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
		{
			file: 'dist/index.umd.js',
			name: 'tzts',
			format: 'umd',
			sourcemap: true,
		},
	],
	plugins: [
		typescript({
			cacheDir: '.rollup.tscache',
			tsconfig: './tsconfig.json',
			outputToFilesystem: true,
			include: ['src/**/*.ts', 'src/data/timezone.json'],
		}),

		commonjs({
			extensions: ['.js', '.ts'],
		}),
		tsConfigPaths(),
		resolve({
			moduleDirectories: ['node_modules', 'src'],
		}),
		json(),
		inject({
			Buffer: ['buffer', 'Buffer'],
			Promise: ['promise', 'Promise'],
		}),
		builtins(),
	],
};
