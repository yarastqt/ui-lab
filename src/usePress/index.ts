import React, { HTMLAttributes, KeyboardEventHandler, MouseEvent, MouseEventHandler, useMemo, useState } from 'react'
import { disableTextSelection, restoreTextSelection } from './selection';

export type PressHookProps = {
  isDisabled?: boolean
}

export type PressHookResult = {
  isPressed: boolean
  pressProps: {
    onKeyDown: KeyboardEventHandler<HTMLElement>
    onKeyUp: KeyboardEventHandler<HTMLElement>
    onClick: MouseEventHandler<HTMLElement>
    onMouseDown: MouseEventHandler<HTMLElement>
    onMouseUp: MouseEventHandler<HTMLElement>
    onMouseLeave: MouseEventHandler<HTMLElement>
  }
}

// TODO: Состояние pressed может поступить снаружи.
export function usePress({ isDisabled }: PressHookProps): PressHookResult {
  const [pressed, setPressed] = useState(false)

  const pressProps = useMemo(() => {
    const props: HTMLAttributes<HTMLElement> = {}

    if (typeof PointerEvent !== 'undefined') {
      props.onPointerDown = () => {
        disableTextSelection()
        setPressed(true)
      }
      props.onPointerUp = () => {
        restoreTextSelection()
        setPressed(false)
      }
    } else {
      props.onMouseDown = (event: MouseEvent<HTMLElement>) => {
        if (event.button === 0) {
          event.preventDefault()
        }

        setPressed(true)
      }
      props.onMouseUp = () => setPressed(false)
      props.onMouseLeave = () => setPressed(false)
    }

    return props
  }, []);

  const onClick = (event: MouseEvent<HTMLElement>) => {
    if (event.button === 0) {
      event.stopPropagation()
      if (isDisabled) {
        event.preventDefault()
      } else {
        event.currentTarget.focus({ preventScroll: true })
      }
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isValidKeyboardEvent(event.nativeEvent)) {
      event.preventDefault()
      event.stopPropagation()
      if (!pressed && !event.repeat) {
        setPressed(true)
      }
    }
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isValidKeyboardEvent(event.nativeEvent) && !event.repeat) {
      setPressed(false)
    }
  }

  return {
    isPressed: pressed,
    pressProps: { onKeyDown, onKeyUp, onClick, ...pressProps },
  }
}

function isValidKeyboardEvent(event: KeyboardEvent): boolean {
  const { key, target } = event
  const element = target as HTMLElement

  const role = element.getAttribute('role')
  const isHTMLAnchorLink = element.tagName === 'A' && element.hasAttribute('href')

  // Обрабатываем только случаи нажатия `Space` и `Enter` (Spacebar используется для ie11).
  return (
    (key === 'Enter' || key === ' ' || key === 'Spacebar') &&
    // Элемент-ссылка должен обрабатываться нативно, если только это не `role=button`.
    (!isHTMLAnchorLink || (role === 'button' && key !== 'Enter')) &&
    // Элемент с `role=link` должен обрабатываться только с клавишей `Enter`.
    !(role === 'link' && key !== 'Enter')
  )
}
