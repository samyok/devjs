import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
  input: './assets/codeScreen/app.js',
  output: {
    file: './assets/codeScreen/dist/editor.bundle.js',
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    {
      name: 'make-it-string',
      generateBundle(outputOptions, bundle) {
        const [filename, entry] = Object.entries(bundle).find(
          ([_, chunk]) => chunk.isEntry,
        );
        this.emitFile({
          type: 'asset',
          fileName: filename,
          source: 'export default ' + JSON.stringify(entry.code),
        });
      },
    },
  ],
};
