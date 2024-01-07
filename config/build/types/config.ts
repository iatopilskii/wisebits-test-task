export type TBuildMode = 'production' | 'development';

export interface IBuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface IBuildOptions {
  mode: TBuildMode
  path: IBuildPath
  isDev: boolean
  port: number
}

export interface IBuildEnv {
  mode: TBuildMode
  port: number
}
