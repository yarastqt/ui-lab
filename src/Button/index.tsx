import React, { FC } from 'react'

import { StyledComponent, styled, applyModifiers, useThemeProps } from '../lib/styled'
import { useButton } from '../useButton'

export type ButtonProps = StyledComponent & {
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, disabled, modifiers, ...otherProps } = props
  const { isPressed, isHovered, buttonProps } = useButton({ isDisabled: disabled, ...otherProps })
  const themeProps = useThemeProps({ component: 'button' })

  return (
    <Container
      {...themeProps}
      {...buttonProps}
      data-pressed={isPressed}
      data-hovered={isHovered}
      __modifiers={modifiers}
    >
      <Text data-slot="text">{children}</Text>
    </Container>
  )
}

const Container = styled.button`
  position: relative;
  display: inline-block;
  overflow: visible;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: ${(p: any) => p.theme.fontFamily};
  -moz-user-focus: ignore;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  border-width: 0;
  outline: 0;
  background: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }

  ${applyModifiers}
`

const Text = styled.span`
  position: relative;
  display: inline-block;
  resize: none;
  white-space: nowrap;
  pointer-events: none;
`
