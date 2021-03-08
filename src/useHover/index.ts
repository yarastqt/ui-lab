import { HTMLAttributes, useMemo, useState } from 'react'

export function useHover() {
  const [isHovered, setHovered] = useState(false)

  const hoverProps = useMemo(() => {
    const props: HTMLAttributes<HTMLElement> = {}

    if (typeof PointerEvent !== 'undefined') {
      props.onPointerEnter = () => setHovered(true)
      props.onPointerLeave = () => setHovered(false)
    } else {
      props.onMouseEnter = () => setHovered(true)
      props.onMouseLeave = () => setHovered(false)
    }

    return props
  }, [])

  return {
    isHovered,
    hoverProps,
  }
}
