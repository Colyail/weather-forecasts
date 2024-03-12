const colors = {
  black: '#000',
  white: '#FFF',
  purple: '#BF5AF2',
  yellow: '#FFD60A',
  blue: '#0A84FF',
  cyan: '#64D2FF',
}

const lightTheme = {
  primary: colors.blue,
  text: colors.white,
  textSecondary: colors.blue,
  background: colors.black,
  backgroundSecondary: colors.white,
  border: colors.blue,
  borderLight: colors.cyan,
};

const darkTheme: Theme = {
  primary: colors.blue,
  text: colors.black,
  textSecondary: colors.blue,
  background: colors.white,
  backgroundSecondary: colors.black,
  border: colors.blue,
  borderLight: colors.cyan,
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
