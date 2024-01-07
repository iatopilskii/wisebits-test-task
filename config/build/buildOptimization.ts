import webpack from "webpack"
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin'

export function buildOptimization(): webpack.Configuration["optimization"] {
  return {
    minimize: true,
    minimizer: [
      new CSSMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: 'default',
        },
      }),
      '...',
    ]
  }
}
