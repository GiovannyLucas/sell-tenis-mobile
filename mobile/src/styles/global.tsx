import { DefaultTheme, configureFonts } from 'react-native-paper';

const fonts = configureFonts({
  android: {
    regular: {
      fontFamily: 'Barlow-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Barlow-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Barlow-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Barlow-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Barlow-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Barlow-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Barlow-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Barlow-Thin',
      fontWeight: 'normal',
    },
  },
  web: {
    regular: {
      fontFamily: 'Barlow-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Barlow-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Barlow-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Barlow-Thin',
      fontWeight: 'normal',
    },
  },
});

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FDF',
    background: 'transparent',
  },
  fonts,
};
