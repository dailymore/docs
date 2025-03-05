// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Module from 'module'

const a = import.meta.glob('./**/*.vue', { eager: true })
const b = import.meta.glob('./**/*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const components: Record<string, Module> = {}
const rawComponents: Record<string, string> = {}

Object.entries(a).forEach(([path, value]) => {
  const name = path.split('/').pop()?.replace('.vue', '')

  if (!name) return

  components[name] = value.default
})

Object.entries(b).forEach(([path, raw]) => {
  const name = path.split('/').pop()?.replace('.vue', 'Raw')

  if (!name) return

  rawComponents[name] = raw
})

export { components, rawComponents }
