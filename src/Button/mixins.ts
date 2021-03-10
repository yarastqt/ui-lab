import { css } from '../lib/styled'

export function useBaseButtonMixin(props: {
  typoColor: string
  fillColor: string
  borderRadius: string
}) {
  return css`
    color: ${props.typoColor};
    transition: transform 0.1s ease-out, color 0.15s linear;
    transform: scale(1);

    &::before {
      background-color: ${props.fillColor};
      transition: background-color 0.15s linear;
      border-radius: ${props.borderRadius};
    }
  `
}

export function usePressedButtonMixin() {
  return css`
    &[data-pressed='true'] {
      transition: none;
      transform: scale(0.96);
    }
  `
}

export function useDisabledButtonMixin(props: { typoColor: string; fillColor: string }) {
  return css`
    &[aria-disabled='true'] {
      color: ${props.typoColor};
    }

    &[aria-disabled='true']::before {
      border-color: transparent;
      background-color: ${props.fillColor};
    }
  `
}

export function useGenericSize(theme: any, selector: string) {
  return useSizedButton({
    height: theme[selector].height,
    fontSize: theme[selector].fontSize,
    lineHeight: theme[selector].lineHeight,
    indentAll: theme[selector].text.indentAll,
    iconWidth: theme[selector].icon.iconWidth,
    iconIndentLeft: theme[selector].icon.iconIndentLeft,
    iconIndentRight: theme[selector].icon.iconIndentRight,
  })
}

// TODO: Можно сделать generic-модификатор, в который указываем только то, откуда забрать данные
export function useSizedButton(props: {
  height: string
  fontSize: string
  lineHeight: string
  indentAll: string
  iconWidth: string
  iconIndentLeft: string
  iconIndentRight: string
}) {
  return css`
    height: ${props.height};
    font-size: ${props.fontSize};
    line-height: ${props.lineHeight};

    & [data-slot='text'] {
      margin: ${props.indentAll};
    }

    & .Button2-Icon {
      width: ${props.iconWidth};
    }

    & .Button2-Icon.Icon_type_arrow {
      width: ${props.iconWidth};
    }

    & .Button2-Icon_side_left ~ .Button2-Text {
      margin-left: ${props.iconIndentLeft};
    }

    & .Button2-Icon_side_right ~ .Button2-Text {
      margin-right: ${props.iconIndentRight};
    }
  `
}
