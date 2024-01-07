import webpack from 'webpack';

import { buildOptimization } from './buildOptimization';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

import { IBuildOptions } from './types/config';

export function buildWebpackConfig({
  mode, port, isDev, path: {
    entry, build, html, src,
  },
}: IBuildOptions): webpack.Configuration {
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(html),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(src),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
    optimization: isDev ? undefined : buildOptimization(),
    target: isDev ? 'web' : 'browserslist',
    stats: {
      chunks: false,
      chunkModules: false,
      modules: false,
      assets: true,
      entrypoints: false,
    },
  };
}
