import { useHover } from '../useHover'
import { usePress } from '../usePress'

export type ButtonHookProps = {
  isDisabled?: boolean
  as?: string
  href?: string
}

export type ButtonHookResult = {
  isPressed: boolean
  isHovered: boolean
  buttonProps: {
    disabled: boolean
    // adds
    role?: string
    tabIndex?: number
    href?: string
  }
}

export function useButton(props: ButtonHookProps): ButtonHookResult {
  let additionalProps = {}
  const { isDisabled, as: alias = 'button', href } = props
  const { pressProps, isPressed } = usePress({ isDisabled })
  const { hoverProps, isHovered } = useHover()

  if (alias !== 'button') {
    additionalProps = {
      role: 'button',
      tabIndex: isDisabled ? undefined : 0,
      href: alias === 'a' && isDisabled ? undefined : href,
    }
  }

  return {
    isPressed,
    isHovered,
    buttonProps: {
      // @ts-expect-error (TODO: Fix this.)
      disabled: isDisabled,
      ...pressProps,
      ...hoverProps,
      ...additionalProps,
    },
  }
}
