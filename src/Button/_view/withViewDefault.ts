import { Theme } from '../../Theme'
import { createStyledModifier } from '../../lib/styled'
import { useBaseButtonMixin, useDisabledButtonMixin, usePressedButtonMixin } from '../mixins'

export const withViewDefault = createStyledModifier(
  { view: 'default' } as const,
  (css, { button: { viewDefault } }: Theme) => css`
    ${useBaseButtonMixin({
      typoColor: viewDefault.typoColor.base,
      fillColor: viewDefault.fillColor.base,
      borderRadius: viewDefault.borderRadius,
    })}
    ${useDisabledButtonMixin({
      typoColor: viewDefault.typoColor.disabled,
      fillColor: viewDefault.fillColor.disabled,
    })}
    ${usePressedButtonMixin()}
  `,
)
