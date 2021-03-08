import { ComponentType, createElement } from 'react'
import { SerializedStyles, useTheme, css } from '@emotion/react'
import { HOC } from '@bem-react/core'

type StyledCreator = (css: any, theme: any) => SerializedStyles

export function createStyledModifier<T>(predicate: T, creator: StyledCreator): HOC<Partial<T>> {
  return <T>(StyleableComponent: ComponentType<T>) => {
    return (props: T) => {
      let nextProps = props

      if (isPredicateMatched(predicate, props)) {
        const theme = useTheme()
        const modifier = creator(css, theme)

        nextProps = {
          ...props,
          // @ts-expect-error
          modifiers: [...(props.modifiers || []), modifier],
        }
      }

      return createElement(StyleableComponent, nextProps)
    }
  }
}

export function applyModifiers(props: any) {
  return props.__modifiers
}

function isPredicateMatched(predicate: any, props: any) {
  let matched = false
  for (const value in predicate) {
    matched = predicate[value] === props[value]
  }
  return matched
}
