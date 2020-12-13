import React, { FC, useRef } from 'react'

import { BUTTON_NEW_LAYOUT } from '../features'
import { useButton } from '../useButton'

export type ButtonProps = {
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isPressed, buttonProps } = useButton({ isDisabled: disabled, ...props })

  if (process.env[BUTTON_NEW_LAYOUT.value]) {
    return (
      <button {...buttonProps} ref={ref} data-pressed={isPressed}>
        <span>addonBefore</span>
        <span>{children}</span>
        <span>addonAfter</span>
      </button>
    )
  }

  return (
    <button {...buttonProps} ref={ref} data-pressed={isPressed}>
      {children}
    </button>
  )
}
