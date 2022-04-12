import fs from 'fs'
import { AspidaConfig, build } from 'aspida/dist/commands'
import { camelize } from './helper'

export default ({
  config,
  types,
  files,
  outputDir
}: {
  config: AspidaConfig
  types: string | null
  files: {
    file: string[]
    methods: string
  }[]
  outputDir?: string
}) => {
  if (types) {
    fs.mkdirSync(`${outputDir}/@types`)
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = camelize(`${`${outputDir}/${dirList.slice(0, i + 1).join('/')}`}`)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(
      `${outputDir}/${camelize(p.file.join('/'))}/${fileName && camelize(fileName)}.ts`,
      p.methods,
      'utf8'
    )
  })
  const buildConfig = config
  buildConfig.input = outputDir || config.input

  build(buildConfig)
}
