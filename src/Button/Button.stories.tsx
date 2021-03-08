import React from 'react'
import { Meta } from '@storybook/react'

import { ThemeProvider, themeDefault } from '../Theme'
import { Button } from './bundle'

export default {
  title: 'Button',
} as Meta

export const basic = () => {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <Button size="m" view="default">
          Click me
        </Button>
        <Button size="s" view="action">
          Click me
        </Button>
      </ThemeProvider>
    </>
  )
}
