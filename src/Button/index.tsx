import React, { FC, useRef } from 'react'

import { useButton } from '../useButton'

export type ButtonProps = {
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isPressed, buttonProps } = useButton({ isDisabled: disabled, ...props })

  return (
    <button {...buttonProps} ref={ref} data-pressed={isPressed}>
      {children}
    </button>
  )
}
