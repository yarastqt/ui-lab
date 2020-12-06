import React, { FC, useRef } from 'react'

import { useButton } from '../useButton'

export type ButtonProsp = {
  disabled?: boolean
}

export const Button: FC<ButtonProsp> = ({ children, disabled }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isPressed, buttonProps } = useButton({ isDisabled: disabled })

  return (
    <button {...buttonProps} ref={ref} data-pressed={isPressed}>
      {children}
    </button>
  )
}
