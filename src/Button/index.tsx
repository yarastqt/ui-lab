import React, { FC, useRef } from 'react'

import { BUTTON_NEW_LAYOUT, isFeatureEnabled } from '../features'
import { useButton } from '../useButton'

export type ButtonProps = {
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { isPressed, buttonProps } = useButton({ isDisabled: disabled, ...props })

  // TODO: Пример с css-modules.
  // TODO: Add example with styled-components.
  // TODO: Исследовать проблему с интеграцией в других компонентах в одно время.
  // TODO: Проверить работу с динамическими импортами.
  if (isFeatureEnabled(BUTTON_NEW_LAYOUT, Button)) {
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
