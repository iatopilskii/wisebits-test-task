import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import SveltePreprocess from 'svelte-preprocess'

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const svelteLoader: webpack.RuleSetRule = {
    test: /\.svelte$/,
    use: {
      loader: 'svelte-loader',
      options: {
        compilerOptions: {
          dev: isDev
        },
        hotReload: isDev,
        preprocess: SveltePreprocess({
          less: true,
        })
      }
    }
  }

  const typeScriptLoader: webpack.RuleSetRule = {
    test: /\.ts$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const lessLoader: webpack.RuleSetRule = {
    test: /\.less$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        }
      },
      'less-loader',
    ],
  }

  return [
    svelteLoader,
    typeScriptLoader,
    lessLoader
  ]
}
