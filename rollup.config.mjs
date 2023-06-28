import commonjs from "@rollup/plugin-commonjs";
export default {
	input: './geojsonhint.js',
	output: {
		file: './geojsonhint.esm.js',
		format: 'esm'
	},
	plugins: [commonjs()]
};