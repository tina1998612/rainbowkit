/* eslint-disable sort-keys-fix/sort-keys-fix */
export const colors = {
  green10: '#EAFCE8',
  green20: '#CDFACD',
  green30: '#A6F5AC',
  green40: '#74E082',
  green50: '#4BD166',
  green60: '#1DB847',
  green70: '#189943',
  green80: '#09752D',
  green90: '#09752D',
  green100: '#003D18',

  blue10: '#EDF9FF',
  blue20: '#D1EDFF',
  blue30: '#A3D7FF',
  blue40: '#6BBFFF',
  blue50: '#3898FF',
  blue60: '#0E76FD',
  blue70: '#1761E0',
  blue80: '#0B4AB8',
  blue90: '#053085',
  blue100: '#001E59',

  purple10: '#F7F5FF',
  purple20: '#E7E0FF',
  purple30: '#C6B8FF',
  purple40: '#9E8FFF',
  purple50: '#7A70FF',
  purple60: '#5F5AFA',
  purple70: '#5248E0',
  purple80: '#4936C2',
  purple90: '#38228F',
  purple100: '#2A0C66',

  pink10: '#FFF0FA',
  pink20: '#FFD6F1',
  pink30: '#FFB8E2',
  pink40: '#FF99CF',
  pink50: '#FF7AB8',
  pink60: '#FF5CA0',
  pink70: '#E04887',
  pink80: '#CC3976',
  pink90: '#851B53',
  pink100: '#570040',

  red10: '#FFF0F0',
  red20: '#FFD4D1',
  red30: '#FFACA3',
  red40: '#FF887A',
  red50: '#FF6257',
  red60: '#FA423C',
  red70: '#D13732',
  red80: '#B22824',
  red90: '#7A1714',
  red100: '#520907',

  orange10: '#FFF6EB',
  orange20: '#FFE7CC',
  orange30: '#FFCF99',
  orange40: '#FFB266',
  orange50: '#FF983D',
  orange60: '#FF801F',
  orange70: '#E06E16',
  orange80: '#AD530E',
  orange90: '#703B12',
  orange100: '#3D1E0A',

  yellow10: '#FFFBE0',
  yellow20: '#FFF5C2',
  yellow30: '#FFEE99',
  yellow40: '#FFE566',
  yellow50: '#FFDF3D',
  yellow60: '#FFD014',
  yellow70: '#EBAF09',
  yellow80: '#B88700',
  yellow90: '#7A600A',
  yellow100: '#42320B',

  black100: 'black',

  white10: '#1B1C1E',
  white20: 'rgba(245, 248, 255, 0.12)',
  white30: 'rgba(245, 248, 255, 0.16)',
  white40: 'rgba(245, 248, 255, 0.2)',
  white50: 'rgba(245, 248, 255, 0.28)',
  white60: 'rgba(245, 248, 255, 0.4)',
  white70: 'rgba(245, 248, 255, 0.56)',
  white80: 'rgba(245, 248, 255, 0.76)',
  white90: 'rgba(247, 250, 255, 0.92)',
  white100: 'white',

  gray10: '#F0F1F5',
  gray20: 'rgba(9, 17, 31, 0.06)',
  gray30: 'rgba(16, 21, 31, 0.1)',
  gray40: 'rgba(16, 21, 31, 0.16)',
  gray50: 'rgba(22, 25, 31, 0.24)',
  gray60: 'rgba(26, 28, 31, 0.36)',
  gray70: 'rgba(27, 29, 31, 0.5)',
  gray80: 'rgba(27, 29, 31, 0.7)',
  gray90: 'rgba(27, 29, 31, 0.88)',
  gray100: 'black',

  blueGray10: '#F0F1F5',
  blueGray20: '#E6E9F0',
  blueGray30: '#DADEE5',
  blueGray40: '#CAD0D9',
  blueGray50: '#AFB9C7',
  blueGray60: '#929EAD',
  blueGray70: '#78828F',
  blueGray80: '#5F6670',
  blueGray90: '#3C4047',
  blueGray100: '#242529',
};

export const tokens = {
  colors: {
    light: {
      ...colors,
      blue: colors.blue60,
      green: colors.green60,
      red: colors.red60,
      purple: colors.purple60,
      pink: colors.pink60,
      orange: colors.orange60,
      yellow: colors.yellow60,

      accent: colors.white100,

      label: colors.gray100,
      labelSecondary: colors.gray80,
      labelTertiary: colors.gray70,
      labelQuaternary: colors.gray60,
      labelInverse: colors.white100,
      labelWhite: colors.white100,

      fill: colors.gray30,
      fillSecondary: colors.gray20,
      fillElevated: colors.white100,

      background: colors.white100,
      backgroundElevated: `${colors.blueGray10}99`,

      separator: colors.gray20,
    },
    dark: {
      ...colors,
      blue: colors.blue50,
      green: colors.green50,
      red: colors.red50,
      purple: colors.purple50,
      pink: colors.pink50,
      orange: colors.orange50,
      yellow: colors.yellow50,

      accent: colors.black100,

      label: colors.white100,
      labelSecondary: colors.white80,
      labelTertiary: colors.white70,
      labelQuaternary: colors.white60,
      labelInverse: colors.gray100,
      labelWhite: colors.white100,

      fill: colors.white30,
      fillSecondary: colors.white20,
      fillElevated: colors.blueGray100,

      background: colors.black100,
      backgroundElevated: colors.white10,

      separator: colors.white20,
    },
  },
  fonts: {
    normal:
      'SFRounded, ui-rounded, SF Pro Rounded, system-ui, Helvetica Neue, Arial, Helvetica, sans-serif',
    mono: 'SFMono, ui-monospace, monospace',
  },
  space: {
    'px': '1px',
    '1': '2px',
    '2': '4px',
    '3': '8px',
    '4': '12px',
    '5': '16px',
    '6': '20px',
    '7': '24px',
    '8': '28px',
    '9': '32px',
    '10': '40px',
    '11': '64px',
  },
  borderWidths: {
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '1': '3px',
    '2': '6px',
    '3': '12px',
    '4': '14px',
    '5': '16px',
    '6': '20px',
    '7': '24px',
    'round': '9999px',
  },
  fontSizes: {
    '1': '11px',
    '2': '14px',
    '3': '16px',
    '4': '20px',
    '5': '24px',
    '6': '26px',
    '7': '32px',
  },
};

export type Mode = 'light' | 'dark';
export type Tokens = typeof tokens;
