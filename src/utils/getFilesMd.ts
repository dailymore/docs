import fs from 'fs'
import path from 'path'

export const formatFileName = (fileName: string): string => {
  return fileName
    .replace('.md', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const getMdFiles = (dir: string) => {
  return fs.readdirSync(dir).flatMap((category) => {
    const categoryPath = path.join(dir, category)

    if (!fs.statSync(categoryPath).isDirectory()) return []

    return fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        return {
          category,
          text: formatFileName(file),
          link: `/sidebars/${category}/${file}`,
        }
      })
  })
}
