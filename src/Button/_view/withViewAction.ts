import { Theme } from '../../Theme'
import { createStyledModifier } from '../../lib/styled'
import { useBaseButtonMixin, useDisabledButtonMixin, usePressedButtonMixin } from '../mixins'

export const withViewAction = createStyledModifier(
  { view: 'action' } as const,
  (css, { button: { viewAction } }: Theme) => css`
    ${useBaseButtonMixin({
      typoColor: viewAction.typoColor.base,
      fillColor: viewAction.fillColor.base,
      borderRadius: viewAction.borderRadius,
    })}
    ${useDisabledButtonMixin({
      typoColor: viewAction.typoColor.disabled,
      fillColor: viewAction.fillColor.disabled,
    })}
    ${usePressedButtonMixin()}
  `,
)
