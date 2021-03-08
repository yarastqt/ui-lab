import { Theme } from '../../Theme'
import { createStyledModifier } from '../../lib/styled'
import { useSizedButton } from '../mixins'

export const withSizeS = createStyledModifier(
  { size: 's' } as const,
  (_, { button: { sizeS } }: Theme) =>
    useSizedButton({
      height: sizeS.height,
      fontSize: sizeS.fontSize,
      lineHeight: sizeS.lineHeight,
      indentAll: sizeS.text.indentAll,
      iconWidth: sizeS.icon.width,
      iconIndentLeft: sizeS.icon.indentLeft,
      iconIndentRight: sizeS.icon.indentRight,
    }),
)
