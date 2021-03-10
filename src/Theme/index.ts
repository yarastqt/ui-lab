export { ThemeProvider } from '../lib/styled'
export { theme as themeDefault } from './default'
export type Theme = typeof import('./default').theme
