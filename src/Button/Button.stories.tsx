import React from 'react'
import { Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button'
} as Meta

export const basic = () => {
  return (
    <Button>Click me</Button>
  )
}
