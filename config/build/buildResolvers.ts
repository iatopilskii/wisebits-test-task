import path from 'path';
import webpack from 'webpack';

export function buildResolvers(src: string): webpack.ResolveOptions {
  return {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src/runtime'),
    },
    extensions: ['.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
  };
}
