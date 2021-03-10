import { Theme, SerializedStyles } from '@emotion/react'
import { CreateStyled as BaseCreateStyled } from '@emotion/styled/base'
import emotionStyled, { CreateStyledComponent } from '@emotion/styled'

export * from './modifier'
export * from './theme'
export { css, ThemeProvider } from '@emotion/react'

export const styled: CreateStyled = emotionStyled

export type StyledComponent = {
  /**
   * @internal
   */
  modifiers?: SerializedStyles[]
}

type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
      __modifiers?: any[]
    },
    JSX.IntrinsicElements[Tag]
  >
}

type CreateStyled = BaseCreateStyled & StyledTags
