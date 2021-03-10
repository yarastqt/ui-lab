import { useTheme } from '@emotion/react'

export function useThemeProps(props: { component: string }) {
  const theme: Record<string, any> = useTheme()

  return theme[props.component]
}
