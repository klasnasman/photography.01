import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/assets/flickity.pkgd.min.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [commonjs()]
};