import path from 'path'

import type { DefaultTheme } from 'vitepress'
import { formatFileName, getMdFiles } from '../utils/getFilesMd'

const sidebarsDir = path.resolve(__dirname, '../sidebars')

const order = ['installations', 'guides']

const groupedFiles = getMdFiles(sidebarsDir).reduce(
  (acc, { category, text, link }) => {
    if (!acc[category]) acc[category] = []
    acc[category].push({ text, link })

    return acc
  },
  {} as Record<string, any[]>,
)

let sidebars

sidebars = Object.entries(groupedFiles).sort(
  ([categoryA], [categoryB]) => order.indexOf(categoryA) - order.indexOf(categoryB),
)

sidebars = sidebars.map(([category, items]) => ({
  text: formatFileName(category),
  items,
}))

export default sidebars as DefaultTheme.Sidebar
