import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { IBuildEnv, IBuildPath, TBuildMode } from './config/build/types/config'

export default (env: IBuildEnv) => {
  const paths: IBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode: TBuildMode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    path: paths,
    isDev,
    port: PORT
  })

  return config
}
