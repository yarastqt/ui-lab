export const theme = {
  space: {
    '3xs': '2px',
    '2xs': '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '72px',
    '6xl': '96px',
  },
  typography: {
    font: {
      family: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
    controls: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      size: {
        s: {
          fontSize: '13px',
        },
        m: {
          fontSize: '15px',
        },
        l: {
          fontSize: '18px',
        },
      },
    },
  },
  color: {
    base: '#000',
    essential: '#fff',
    project: '#fc0',
    phantom: '#000',
    path: '#04b',
    success: '#00985f',
    alert: '#f33',
    warning: '#f90',
    normal: '#dde3e5',
    system: '#778a9b',
    promo: '#0057d3',
    hover: '#c00',
    fillColor: {
      brand: '#fc0',
      inverse: '#000',
      action: 'rgb(255, 219, 77)',
      selection: 'rgb(255, 234, 158)',
      hover: 'rgba(0, 0, 0, 0.15)',
      border: 'rgba(0, 0, 0, 0.05)',
      stripe: 'rgba(0, 0, 0, 0.04)',
      ghost: 'rgba(0, 0, 0, 0.08)',
      default: '#fff',
      tone: 'rgba(0, 0, 0, 0.9)',
      soft: 'rgba(255, 255, 255, 0.97)',
      success: '#00985f',
      alert: '#f33',
      warning: '#f90',
      normal: '#dde3e5',
      system: '#778a9b',
      link: 'rgba(21, 126, 239, 0.4)',
      promo: '#0057d3',
    },
    typo: {
      brand: '#fc0',
      primary: '#000',
      inverse: '#fff',
      promo: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      ghost: 'rgba(0, 0, 0, 0.3)',
      disable: 'rgba(0, 0, 0, 0.3)',
      success: '#00985f',
      warning: '#f90',
      alert: 'rgb(224, 0, 0)',
    },
    link: {
      base: '#04b',
      external: '#04b',
      minor: 'rgb(102, 102, 153)',
      hover: '#c00',
    },
    control: {
      borderColor: {
        focus: 'rgb(179, 179, 179)',
        prism: '#fc0',
      },
      typo: {
        primary: '#000',
        secondary: 'rgba(0, 0, 0, 0.6)',
        ghost: 'rgba(0, 0, 0, 0.3)',
        passive: '#000',
        faint: 'rgb(255, 255, 255)',
        disable: 'rgb(128, 128, 128)',
        link: '#04b',
        error: 'rgb(224, 0, 0)',
      },
      type: {
        default: {
          fillColor: {
            base: 'rgb(230, 230, 230)',
            hover: 'rgb(219, 219, 219)',
            press: 'rgb(219, 219, 219)',
            disable: 'rgb(242, 242, 242)',
          },
          borderColor: {
            base: 'rgb(179, 179, 179)',
            hover: 'rgb(219, 219, 219)',
            press: 'rgb(179, 179, 179)',
            disable: 'rgb(232, 232, 232)',
            error: {
              base: '#f33',
              hover: 'rgb(224, 0, 15)',
            },
          },
        },
        pseudo: {
          fillColor: {
            base: 'rgb(255, 255, 255)',
            hover: 'rgb(247, 247, 247)',
          },
          borderColor: {
            base: 'rgb(204, 204, 204)',
          },
        },
        action: {
          fillColor: {
            base: '#fc0',
            hover: 'rgb(250, 192, 0)',
            press: 'rgb(250, 192, 0)',
          },
        },
        passive: {
          fillColor: {
            base: '#fff',
          },
        },
        progress: {
          fillColor: {
            base: '#fc0',
            process: 'rgb(255, 213, 0)',
          },
        },
        blank: {
          fillColor: {
            base: '#fff',
            hover: '#fff',
            disable: 'rgb(242, 242, 242)',
          },
          borderColor: {
            base: 'rgb(217, 217, 217)',
            hover: 'rgb(204, 204, 204)',
            disable: 'rgb(242, 242, 242)',
          },
        },
        faint: {
          fillColor: {
            base: '#fff',
            disable: 'rgb(199, 199, 199)',
          },
        },
        check: {
          fillColor: {
            base: 'rgb(84, 84, 84)',
            hover: 'rgb(84, 84, 84)',
            press: 'rgb(82, 82, 82)',
            disable: 'rgb(242, 242, 242)',
          },
          borderColor: {
            base: 'rgb(168, 135, 0)',
            hover: 'rgb(168, 135, 0)',
            press: 'rgb(168, 135, 0)',
          },
        },
        link: {
          fillColor: {
            base: '#04b',
            hover: 'rgba(0, 68, 187, 0.3)',
          },
          borderColor: {
            base: 'rgba(0, 68, 187, 0.6)',
            hover: 'rgba(0, 68, 187, 0.6)',
          },
        },
        raised: {
          typo: {
            base: '#000',
            disable: '#7f7f7f',
          },
          fillColor: {
            base: '#fff',
            hover: '#f5f5f5',
            disable: '#f5f5f5',
            check: '#fff',
          },
        },
      },
    },
  },
  attach: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    typoColor: '#000',
    reset: {
      width: '12px',
      height: '12px',
      indentLeft: '5px',
    },
    iconFile: {
      indentRight: '5px',
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '32px',
        holder: {
          indentLeft: '6px',
        },
      },
      m: {
        fontSize: '15px',
        lineHeight: '36px',
        holder: {
          indentLeft: '8px',
        },
      },
      l: {
        fontSize: '18px',
        lineHeight: '42px',
        holder: {
          indentLeft: '10px',
        },
      },
    },
  },
  badge: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    size: {
      small: '10px',
      large: '16px',
    },
    fontSize: '12px',
    border: {
      radius: '8px',
      color: '#fff',
      width: '2px',
    },
    fillColor: '#f33',
    typoColor: '#fff',
  },
  button: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: {
      width: '1px',
      radius: '4px',
    },
    sizeS: {
      fontSize: '13px',
      lineHeight: '32px',
      height: '32px',
      icon: {
        width: '32px',
        indentLeft: '25px',
        indentRight: '25px',
      },
      text: {
        indentAll: '0 13px',
      },
    },
    sizeM: {
      fontSize: '15px',
      lineHeight: '36px',
      height: '36px',
      icon: {
        width: '36px',
        indentLeft: '29px',
        indentRight: '29px',
      },
      text: {
        indentAll: '0 15px',
      },
    },
    sizeL: {
      fontSize: '18px',
      lineHeight: '42px',
      height: '42px',
      icon: {
        width: '42px',
        indentLeft: '35px',
        indentRight: '35px',
      },
      text: {
        indentAll: '0 18px',
      },
    },
    viewAction: {
      borderRadius: '4px',
      borderColor: {
        focused: '#fc0',
      },
      fillColor: {
        base: '#fc0',
        disabled: 'rgb(242, 242, 242)',
        hovered: 'rgb(250, 192, 0)',
        progress: {
          base: '#fc0',
          process: 'rgb(255, 213, 0)',
        },
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
        hovered: '#000',
        progress: {
          base: '#000',
        },
        checked: {
          base: 'rgb(255, 255, 255)',
          hovered: 'rgb(255, 255, 255)',
        },
      },
    },
    viewClear: {
      borderColor: {
        focused: '#fc0',
      },
      fillColor: {
        disabled: 'rgb(242, 242, 242)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
        checked: {
          base: 'rgb(255, 255, 255)',
        },
      },
    },
    viewDefault: {
      borderRadius: '4px',
      borderColor: {
        focused: '#fc0',
      },
      fillColor: {
        base: 'rgb(230, 230, 230)',
        disabled: 'rgb(242, 242, 242)',
        hovered: 'rgb(219, 219, 219)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
        checked: {
          base: 'rgb(255, 255, 255)',
          hovered: 'rgb(255, 255, 255)',
        },
      },
    },
    viewLink: {
      borderColor: {
        base: 'rgba(0, 68, 187, 0.6)',
        focused: '#fc0',
      },
      fillColor: {
        base: '#fff',
        disabled: 'rgb(242, 242, 242)',
        hovered: 'rgba(0, 68, 187, 0.3)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#04b',
        disabled: 'rgb(128, 128, 128)',
        checked: {
          base: 'rgb(255, 255, 255)',
        },
      },
    },
    viewPseudo: {
      borderColor: {
        base: 'rgb(204, 204, 204)',
        focused: '#fc0',
      },
      fillColor: {
        disabled: 'rgb(242, 242, 242)',
        hovered: 'rgb(247, 247, 247)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
        checked: {
          base: 'rgb(255, 255, 255)',
        },
      },
    },
    viewRaised: {
      borderColor: {
        focused: '#fc0',
      },
      fillColor: {
        base: '#fff',
        disabled: '#f5f5f5',
        hovered: '#f5f5f5',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        disabled: '#7f7f7f',
        checked: {
          base: 'rgb(255, 255, 255)',
        },
      },
    },
  },
  buttonGroup: {
    gap: {
      s: '1px',
      m: '4px',
      l: '6px',
      xl: '8px',
    },
    pin: {
      circle: {
        borderRadius: '100px',
      },
      round: {
        borderRadius: '4px',
      },
    },
  },
  checkbox: {
    viewOutline: {
      borderColor: 'rgba(0, 0, 0, 0.1)',
      fillColor: {
        base: 'transparent',
        hovered: '#d2d2d2',
      },
      disabled: {
        opacity: 0.4,
      },
    },
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: {
      radius: '4px',
    },
    size: {
      s: {
        fontSize: '13px',
        indentLeft: '5px',
        width: '14px',
        height: '14px',
        tick: {
          width: '12px',
          height: '8px',
        },
      },
      m: {
        fontSize: '15px',
        indentLeft: '5px',
        width: '17px',
        height: '17px',
        tick: {
          width: '13px',
          height: '10px',
        },
      },
    },
    disabled: {
      opacity: 0.6,
    },
    viewDefault: {
      outlineColor: '#fc0',
      fillColor: {
        base: 'rgb(230, 230, 230)',
        hovered: 'rgb(219, 219, 219)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
        checked: {
          base: '#fff',
        },
      },
    },
  },
  divider: {
    indentAll: '16px',
    fillColor: '#fc0',
  },
  header: {
    fontFamily: "'YS Text', arial, sans-serif",
    fillColor: '#fff',
    shadow: 'none',
    spaceAll: '0 20px',
    zIndex: 'auto',
    content: {
      height: '60px',
      width: 'auto',
      indentRight: 'auto',
      maxWidth: '1400px',
      spaceAll: 0,
    },
    logo: {
      height: '32px',
      indentRight: '29px',
      circle: {
        indentTop: '-3px',
      },
    },
    logoaas: {
      height: '32px',
      indent: '-5px 0 0 5px',
    },
    icon: {
      width: '20px',
      height: '20px',
      indentRight: '8px',
    },
    actions: {
      gap: '14px',
      spaceLeft: '24px',
    },
    nav: {
      indent: 0,
      spaceAll: 0,
    },
    navLink: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '21px',
      spaceAll: '8px 2px',
      border: '2px solid transparent',
      gap: '12px',
      color: {
        base: '#939cb0',
        hover: '#222426',
        active: '#d00',
      },
    },
    search: {
      fontFamily: 'Arial, sans-serif',
      minWidth: '220px',
      maxWidth: '470px',
      width: '470px',
      indentLeft: '29px',
      fillColor: {
        base: '#ffdb4d',
        hover: '#ffd633',
        active: '#fc0',
      },
    },
    searchButton: {
      typoColor: '#000',
      fontSize: '16px',
      lineHeight: '36px',
      width: '88px',
      indentRight: '9px',
      spaceLeft: '5px',
      before: {
        borderWidth: '22px 0 22px 11px',
        top: '-4px',
        right: '-9px',
      },
    },
    searchTextinput: {
      height: '36px',
      typoColor: '#000',
      borderRadius: '4px',
      fillColor: '#fff',
      control: {
        fontSize: '18px',
        borderWidth: '0 30px 0 13px',
      },
      box: {
        borderWidth: '2px 0 2px 2px',
      },
    },
  },
  link: {
    viewDefault: {
      outlineColor: '#fc0',
      typoColor: {
        base: '#04b',
        disabled: 'rgba(0, 0, 0, 0.3)',
        hovered: '#c00',
      },
    },
  },
  menu: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    group: {
      border: {
        width: '1px',
      },
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '32px',
        spaceVertical: '4px',
        group: {
          spaceVertical: '4px',
          spaceHorizontal: 0,
          indentBottom: '4px',
        },
        item: {
          spaceVertical: '3px',
          spaceHorizontal: '9px',
          indentBottom: '4px',
        },
        itemIcon: {
          indentRight: '4px',
        },
        titleSibling: {
          indentLeft: '20px',
        },
      },
      m: {
        fontSize: '15px',
        lineHeight: '36px',
        spaceVertical: '5px',
        group: {
          spaceVertical: '5px',
          spaceHorizontal: 0,
          indentBottom: '5px',
        },
        item: {
          spaceVertical: '4px',
          spaceHorizontal: '15px',
          indentBottom: '5px',
        },
        itemIcon: {
          indentRight: '6px',
        },
        titleSibling: {
          indentLeft: '20px',
        },
      },
    },
    viewDefault: {
      borderColor: {
        base: 'rgb(179, 179, 179)',
      },
      fillColor: {
        base: 'rgb(230, 230, 230)',
        hovered: 'rgb(219, 219, 219)',
      },
      typoColor: {
        base: '#000',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgb(128, 128, 128)',
        hovered: '#000',
      },
    },
  },
  messageBox: {
    fontSize: '13px',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    lineHeight: '16px',
    hint: {
      borderRadius: '4px',
    },
    close: {
      lineHeight: '16px',
      fontSize: '11px',
      indentRight: '7px',
      width: '16px',
      height: '16px',
    },
    text: {
      indentLeft: '20px',
      indentRight: '20px',
    },
    content: {
      spaceAll: '20px',
      maxWidth: '180px',
    },
    size: {
      s: {
        tail: {
          size: '22px',
        },
        tooltip: {
          fontSize: '11px',
        },
        fontSize: '13px',
        border: {
          radius: '7px',
        },
        content: {
          maxWidth: '260px',
          spaceAll: '5px 10px',
          functional: {
            width: '180px',
          },
        },
      },
      m: {
        tail: {
          size: '22px',
        },
        tooltip: {
          fontSize: '11px',
        },
        fontSize: '13px',
        border: {
          radius: '7px',
        },
        content: {
          spaceAll: '10px 14px',
          minWidth: '200px',
          maxWidth: '280px',
          tooltip: {
            maxWidth: '320px',
          },
          functional: {
            width: '280px',
          },
        },
      },
      l: {
        tail: {
          size: '22px',
        },
        functional: {
          fontSize: '14px',
          lineHeight: '18px',
        },
        fontSize: '13px',
        border: {
          radius: '7px',
        },
        content: {
          spaceAll: '15px 20px',
          minWidth: '300px',
          maxWidth: '380px',
          width: '380px',
          functional: {
            width: '380px',
          },
        },
      },
    },
    button: {
      indentRight: 0,
    },
    'buttons-indentAll': 0,
    viewDefault: {
      typoColor: '#fff',
      fillColor: '#000',
      shadow: '0 6px 20px -4px rgba(0, 0, 0, .7)',
    },
    viewPromo: {
      typoColor: '#fff',
      fillColor: '#0057d3',
      shadow: '0 6px 20px -4px rgba(0, 0, 0, .7)',
    },
    viewInverse: {
      typoColor: '#000',
      fillColor: '#fff',
      shadow: '0 6px 20px -4px rgba(0, 0, 0, .7)',
    },
  },
  modal: {
    border: {
      radius: 0,
    },
  },
  popup: {
    border: {
      radius: '4px',
    },
    viewDefault: {
      typoColor: '#000',
      fillColor: '#fff',
    },
  },
  progress: {
    height: '2px',
    border: {
      radius: 0,
    },
    outer: {
      fillColor: 'transparent',
    },
    inner: {
      fillColor: '#fc0',
    },
  },
  radioButton: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    indent: '3px',
    border: {
      radius: '4px',
    },
    after: {
      border: {
        radius: '2px',
      },
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '28px',
        space: '0 13px',
      },
      m: {
        fontSize: '15px',
        lineHeight: '32px',
        space: '0 15px',
      },
      l: {
        fontSize: '18px',
        lineHeight: '38px',
        space: '0 18px',
      },
    },
    viewDefault: {
      outlineColor: '#fc0',
      fillColor: {
        base: 'rgb(230, 230, 230)',
        checked: {
          base: '#fff',
        },
      },
      typoColor: {
        base: 'rgba(0, 0, 0, 0.6)',
        hovered: '#000',
        checked: {
          base: '#000',
        },
      },
    },
  },
  radiobox: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    viewDefault: {
      dot: {
        fillColor: '#fff',
      },
      outlineColor: '#fc0',
      fillColor: {
        base: 'rgb(230, 230, 230)',
        hovered: 'rgb(219, 219, 219)',
        checked: {
          base: 'rgb(84, 84, 84)',
          hovered: 'rgb(84, 84, 84)',
        },
      },
      typoColor: {
        base: '#000',
      },
    },
    viewOutline: {
      borderColor: 'rgba(0, 0, 0, 0.1)',
      fillColor: {
        base: 'transparent',
        hovered: '#d9d9d9',
      },
      disabled: {
        opacity: 0.4,
      },
    },
    border: {
      radius: '50%',
    },
    after: {
      border: {
        radius: '50%',
      },
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '28px',
        size: '13px',
        positionTop: '2px',
        indentRight: '5px',
        after: {
          size: '5px',
        },
      },
      m: {
        fontSize: '15px',
        lineHeight: '32px',
        size: '17px',
        positionTop: '3px',
        indentRight: '6px',
        after: {
          size: '7px',
        },
      },
    },
    disabled: {
      opacity: 0.6,
    },
  },
  slider: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    viewDefault: {
      typoColor: {
        base: '#000',
      },
      height: '32px',
      track: {
        borderRadius: '2px',
        height: '2px',
        fillColor: {
          base: 'rgba(0, 0, 0, 0.15)',
          hovered: 'rgba(0, 0, 0, 0.25)',
        },
      },
      range: {
        fillColor: {
          base: '#fc0',
          hovered: 'rgb(250, 192, 0)',
          disabled: 'rgba(0, 0, 0, 0.15)',
        },
      },
      thumb: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        fillColor: {
          base: '#fff',
          disabled: '#000',
        },
      },
      tick: {
        fillColor: {
          base: '#fff',
        },
        width: '2px',
        height: '2px',
      },
      tickLabel: {
        fontSize: '13px',
        lineHeight: '16px',
      },
    },
  },
  spin: {
    size: {
      xxs: {
        size: '16px',
      },
      xs: {
        size: '24px',
      },
      s: {
        size: '28px',
      },
      m: {
        size: '32px',
      },
      l: {
        size: '38px',
      },
    },
    viewDefault: {
      borderColor: '#fc0',
    },
  },
  tabsMenu: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '28px',
      },
      m: {
        fontSize: '15px',
        lineHeight: '36px',
      },
    },
    viewDefault: {
      outlineColor: '#fc0',
      activeLine: {
        fillColor: {
          active: '#000',
        },
      },
      typoColor: {
        base: '#000',
      },
    },
  },
  text: {
    display: {
      size: {
        xl: {
          fontSize: '3.5rem',
          lineHeight: '4rem',
          letterSpacing: 'normal',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '3rem',
          lineHeight: '3.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '2.5rem',
          lineHeight: '3rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '2.125rem',
          lineHeight: '2.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    headline: {
      size: {
        xl: {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '1.75rem',
          lineHeight: '2.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '1.5rem',
          lineHeight: '1.875rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        xs: {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    subheader: {
      size: {
        xl: {
          fontSize: '1rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '0.9375rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.875rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '0.8125rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    bodyLong: {
      size: {
        xl: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '0.8125rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    bodyShort: {
      size: {
        xl: {
          fontSize: '1rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '0.9375rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.875rem',
          lineHeight: '1.125rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '0.8125rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    caption: {
      size: {
        xl: {
          fontSize: '0.8125rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.6875rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    overline: {
      size: {
        l: {
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.6875rem',
          lineHeight: '0.875rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '0.625rem',
          lineHeight: '0.75rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
    control: {
      size: {
        xxl: {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        xl: {
          fontSize: '1rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        l: {
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        m: {
          fontSize: '0.875rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        s: {
          fontSize: '0.8125rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        xs: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        xxs: {
          fontSize: '0.6875rem',
          lineHeight: '1rem',
          letterSpacing: '0.0065em',
          fontFamily: "'YS Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
      },
    },
  },
  textarea: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: {
      width: '2px',
      radius: '4px',
    },
    size: {
      s: {
        fontSize: '13px',
        spaceAll: '6px',
        minWidth: '180px',
        minHeight: '32px',
        clear: {
          width: '32px',
          height: '32px',
        },
        hint: {
          fontSize: '12px',
        },
      },
      m: {
        fontSize: '15px',
        spaceAll: '8px',
        minWidth: '200px',
        minHeight: '36px',
        clear: {
          width: '36px',
          height: '36px',
        },
        hint: {
          fontSize: '13px',
        },
      },
    },
    viewDefault: {
      fillColor: {
        base: '#fff',
        disabled: 'rgb(242, 242, 242)',
        hovered: '#fff',
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
      },
      placeholder: {
        typoColor: {
          base: 'rgba(0, 0, 0, 0.3)',
          disabled: 'rgb(128, 128, 128)',
        },
      },
      icon: {
        fillColor: {
          base: 'rgba(0, 0, 0, 0.3)',
        },
      },
      clear: {
        fillColor: {
          base: 'rgba(0, 0, 0, 0.3)',
          hovered: '#000',
        },
      },
      hint: {
        typoColor: {
          stateError: {
            base: 'rgb(224, 0, 0)',
          },
        },
      },
      borderColor: {
        base: 'rgb(217, 217, 217)',
        disabled: 'rgb(242, 242, 242)',
        focused: 'rgb(179, 179, 179)',
        hovered: 'rgb(204, 204, 204)',
        stateError: {
          base: '#f33',
          hovered: 'rgb(224, 0, 15)',
        },
      },
    },
  },
  textinput: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: {
      width: '2px',
      radius: '4px',
    },
    size: {
      s: {
        fontSize: '13px',
        height: '32px',
        spaceAll: '0 8px',
        withIcon: {
          spaceRight: '32px',
          spaceLeft: '32px',
        },
        icon: {
          width: '32px',
          height: '32px',
        },
        hint: {
          fontSize: '12px',
        },
      },
      m: {
        fontSize: '15px',
        height: '36px',
        spaceAll: '0 10px',
        withIcon: {
          spaceRight: '36px',
          spaceLeft: '36px',
        },
        icon: {
          width: '36px',
          height: '36px',
        },
        hint: {
          fontSize: '13px',
        },
      },
    },
    viewMaterial: {
      typoColor: {
        base: '#000',
        disabled: 'rgba(0, 0, 0, 0.4)',
      },
      borderColor: {
        base: 'rgba(0, 0, 0, 0.1)',
        stateError: '#FF3737',
      },
      fontSize: '1rem',
      space: {
        all: '12px 0 10px',
        left: '16px',
        right: '16px',
        top: '16px',
      },
      icon: {
        fillColor: {
          base: 'rgba(0, 0, 0, 0.8)',
          disabled: 'rgba(0, 0, 0, 0.5)',
        },
        width: '24px',
        height: '24px',
      },
      hint: {
        fontSize: '0.75rem',
        typoColor: {
          base: 'rgba(0, 0, 0, 0.4)',
          stateError: '#FF3737',
        },
      },
      caretColor: {
        base: '#067AFF',
        stateError: '#FF3737',
      },
      placeholder: {
        typoColor: {
          base: 'rgba(0, 0, 0, 0.3)',
        },
      },
      labelColor: {
        base: 'rgba(0, 0, 0, 0.25)',
        stateError: '#FF3737',
        floated: {
          base: 'rgba(0, 0, 0, 0.4)',
        },
      },
      variant: {
        filled: {
          borderColor: {
            focused: '#067AFF',
          },
          fillColor: 'rgba(0, 0, 0, 0.05)',
          labelColor: {
            floated: '#067AFF',
          },
        },
        outlined: {
          borderColor: {
            base: 'rgba(0, 0, 0, 0.1)',
            focused: '#067AFF',
          },
          labelColor: {
            floated: '#067AFF',
          },
        },
      },
    },
    viewDefault: {
      fillColor: {
        base: '#fff',
        disabled: 'rgb(242, 242, 242)',
        hovered: '#fff',
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
      },
      placeholder: {
        typoColor: {
          base: 'rgba(0, 0, 0, 0.3)',
          disabled: 'rgb(128, 128, 128)',
        },
      },
      icon: {
        fillColor: {
          base: 'rgba(0, 0, 0, 0.3)',
        },
      },
      clear: {
        fillColor: {
          base: 'rgba(0, 0, 0, 0.3)',
          hovered: '#000',
        },
      },
      hint: {
        typoColor: {
          stateError: {
            base: 'rgb(224, 0, 0)',
          },
        },
      },
      borderColor: {
        base: 'rgb(217, 217, 217)',
        disabled: 'rgb(242, 242, 242)',
        focused: 'rgb(179, 179, 179)',
        hovered: 'rgb(204, 204, 204)',
        stateError: {
          base: '#f33',
          hovered: 'rgb(224, 0, 15)',
        },
      },
    },
  },
  tooltip: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: {
      radius: '4px',
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '12px',
        content: {
          spaceAll: '8px',
        },
        tail: {
          size: '12px',
        },
      },
      m: {
        fontSize: '15px',
        lineHeight: '14px',
        content: {
          spaceAll: '9px 10px',
        },
        tail: {
          size: '24px',
        },
      },
      l: {
        fontSize: '16px',
        lineHeight: '16px',
        content: {
          spaceAll: '18px',
        },
        tail: {
          size: '36px',
        },
      },
    },
    viewDefault: {
      shadow: '0 10px 20px -5px rgba(0, 0, 0, .4)',
      fillColor: {
        base: 'rgb(230, 230, 230)',
        stateSuccess: '#00985f',
        stateWarning: '#f90',
        stateAlert: '#f33',
      },
      typoColor: {
        stateSuccess: 'rgb(255, 255, 255)',
        stateWarning: 'rgb(255, 255, 255)',
        stateAlert: 'rgb(255, 255, 255)',
      },
    },
  },
  tumbler: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    button: {
      space: '2px',
      opacity: {
        disabled: 1,
      },
    },
    size: {
      s: {
        fontSize: '13px',
        lineHeight: '16px',
        borderRadius: '8px',
        width: '32px',
        height: '16px',
        button: {
          borderRadius: '6px',
          width: '12px',
          height: '12px',
          pressed: {
            width: '14px',
          },
        },
        label: {
          indentRight: '8px',
          indentLeft: '8px',
        },
      },
      m: {
        fontSize: '15px',
        lineHeight: '20px',
        borderRadius: '10px',
        width: '40px',
        height: '20px',
        button: {
          borderRadius: '8px',
          width: '16px',
          height: '16px',
          pressed: {
            width: '18px',
          },
        },
        label: {
          indentRight: '12px',
          indentLeft: '12px',
        },
      },
      l: {
        fontSize: '18px',
        lineHeight: '24px',
        borderRadius: '14px',
        width: '56px',
        height: '28px',
        button: {
          borderRadius: '12px',
          width: '24px',
          height: '24px',
          pressed: {
            width: '26px',
          },
        },
        label: {
          indentRight: '16px',
          indentLeft: '16px',
        },
      },
    },
    viewDefault: {
      outlineColor: '#fc0',
      fillColor: {
        base: 'rgb(230, 230, 230)',
        disabled: 'rgb(242, 242, 242)',
        hovered: 'rgb(219, 219, 219)',
        checked: {
          base: '#fc0',
          disabled: 'rgb(242, 242, 242)',
          hovered: 'rgb(250, 192, 0)',
        },
      },
      button: {
        fillColor: {
          base: '#fff',
        },
      },
      typoColor: {
        base: '#000',
        disabled: 'rgb(128, 128, 128)',
      },
    },
  },
  userPic: {
    size: {
      m: {
        size: '42px',
        sizePlus: '52px',
      },
      s: {
        size: '24px',
        sizePlus: '30px',
      },
    },
  },
}
