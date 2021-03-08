import { Theme } from '../../Theme'
import { createStyledModifier } from '../../lib/styled'
import { useSizedButton } from '../mixins'

export const withSizeM = createStyledModifier(
  { size: 'm' } as const,
  (_, { button: { sizeM } }: Theme) =>
    useSizedButton({
      height: sizeM.height,
      fontSize: sizeM.fontSize,
      lineHeight: sizeM.lineHeight,
      indentAll: sizeM.text.indentAll,
      iconWidth: sizeM.icon.width,
      iconIndentLeft: sizeM.icon.indentLeft,
      iconIndentRight: sizeM.icon.indentRight,
    }),
)
