import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StatusBarStyle } from 'expo-status-bar';
import { Appearance as RNAppearance, Platform } from 'react-native';
import { Colors, Typography } from 'react-native-ui-lib';

import { stores } from '../stores';
import { Appearance } from './types/enums';

// =============
// | RN UI Lib |
// =============

const colors = {
  _black: Colors.rgba(20, 20, 20, 1),
  _black2: Colors.rgba(50, 50, 50, 1),
  _white: Colors.rgba(250, 250, 250, 1),
  _white2: Colors.rgba(230, 230, 230, 1),
};

const themes: Record<Appearance, { [key: string]: string }> = {
  system: {},
  light: {
    textColor: colors._black,
    bgColor: colors._white,
    bg2Color: '#E6AE41',
    text: colors._black,
    text2: colors._white,
    mainHeader: '#264653',
    blueberry: '#264653',
    mustard: '#E9C46A',
    orange: '#E76F51',
    orange2: '#F66C24',
    lighterOrange: '#F9CEBF',
    purple: '#5A36FF',
    lightPurple: '#CBC4F6',
    lightOrange: '#F4A261',
    blue: '#578699',
    grey: '#e0e0de',
    red: '#d77467',
    darkerGrey: '#FFFFFF',
    details: '#696d6e',
  },
  dark: {
    textColor: colors._black,
    bgColor: colors._white,
    bg2Color: '#E6AE41',
    text: colors._black,
    text2: colors._white,
    mainHeader: '#264653',
    blueberry: '#264653',
    mustard: '#E9C46A',
    orange: '#E76F51',
    orange2: '#F66C24',
    lighterOrange: '#F9CEBF',
    purple: '#5A36FF',
    lightPurple: '#CBC4F6',
    lightOrange: '#F4A261',
    blue: '#578699',
    grey: '#e0e0de',
    red: '#d77467',
    darkerGrey: '#FFFFFF',
    details: '#696d6e',
  },
};

export const getTheme = () => {
  const { ui } = stores;
  const appearance = ui.isAppearanceSystem ? RNAppearance.getColorScheme() : ui.appearance;
  return themes[appearance ?? 'light'];
};

// for more information - https://wix.github.io/react-native-ui-lib/foundation/style
export const configureDesignSystem = () => {
  const { ui } = stores;

  setColorsScheme(ui.appearance); // needed here
  if (ui.isAppearanceSystem) {
    Colors.loadColors(colors);
    Colors.loadSchemes(themes);
  } else {
    Colors.loadColors({ ...colors, ...themes[ui.appearance] });
    Colors.loadSchemes({ dark: {}, light: {} });
  }

  Typography.loadTypographies({
    section: { fontSize: 26, fontWeight: '600' },
  });
};

const setColorsScheme = (appearance: Appearance) => {
  if (appearance === 'system') {
    Colors.setScheme('default');
  } else {
    Colors.setScheme(appearance);
  }
};

// ==============
// | Navigation |
// ==============
export const getStatusBarStyle = (): StatusBarStyle => {
  const { ui } = stores;

  if (ui.isAppearanceSystem) {
    return 'auto';
  } else {
    switch (ui.appearance) {
      case 'dark':
        return 'light';
      case 'light':
        return 'dark';
      default:
        return 'auto';
    }
  }
};

export const getStatusBarBGColor = (): string => {
  const { ui } = stores;
  const appearance = ui.isAppearanceSystem ? RNAppearance.getColorScheme() : ui.appearance;
  return themes[appearance ?? 'light'].bg2Color;
};

export const getNavigationTheme = (): Theme => {
  const { ui } = stores;

  // for more information - https://reactnavigation.org/docs/themes
  const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      background: Colors.grey40,
      card: Colors.grey40,
      text: Colors.white,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const MyDarkTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.primary,
      background: Colors.grey40,
      card: Colors.grey40,
      text: Colors.white,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const appearance = ui.isAppearanceSystem ? RNAppearance.getColorScheme() : ui.appearance;
  switch (appearance) {
    case 'dark':
      return MyDarkTheme;
    case 'light':
      return MyDefaultTheme;
  }

  return DefaultTheme;
};

export const getHeaderBlurEffect = (): 'regular' | 'light' | 'dark' => {
  const { ui } = stores;

  return ui.isAppearanceSystem ? 'regular' : (ui.appearance as 'light' | 'dark');
};

// Default options
export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
      headerBlurEffect: getHeaderBlurEffect(), // this sets up blurred nav bar
      // if you'd like to have a solid color for a nav bar, then you should
      // set up `headerStyle: {backgroundColor: Colors.bg2Color}`
    },
  }),
});
