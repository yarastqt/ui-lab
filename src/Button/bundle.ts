import { compose, composeU } from '@bem-react/core'

import { Button as UnstyledButton } from './index'
import { withViewDefault } from './_view/withViewDefault'
import { withViewAction } from './_view/withViewAction'
import { withSizeM } from './_size/withSizeM'
import { withSizeS } from './_size/withSizeS'

export const Button = compose(
  composeU(withSizeM, withSizeS),
  composeU(withViewDefault, withViewAction),
)(UnstyledButton)

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Bundled(Button)'
}
