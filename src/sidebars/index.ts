import path from 'path'

import type { DefaultTheme } from 'vitepress'
import { formatFileName, getMdFiles } from '../utils/getFilesMd'

const sidebarsDir = path.resolve(__dirname, '../sidebars')

const order = ['installations', 'guides']

export default Object.entries(
  getMdFiles(sidebarsDir).reduce(
    (acc, { category, text, link }) => {
      if (!acc[category]) acc[category] = []
      acc[category].push({ text, link })

      return acc
    },
    {} as Record<string, { text: string; link: string }[]>,
  ),
)

  .sort(([categoryA], [categoryB]) => order.indexOf(categoryA) - order.indexOf(categoryB))

  .map(([category, items]) => ({
    text: formatFileName(category),
    items,
  })) as DefaultTheme.Sidebar
