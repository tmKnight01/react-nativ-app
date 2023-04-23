import React, {Children} from 'react';
import {ThemeProvider} from 'styled-components';
import appStyles, {lightTheme, darkTheme} from './style';
import {StatusBar} from 'react-native';
// import StatusBarS from './components/StatusBar';

interface providerProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({children}: providerProps) => {
  const appTheme = {
    ...appStyles,
    colors: {
      ...appStyles.colors,
      ...darkTheme,
    },
  };
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <StatusBar
          backgroundColor={appTheme.colors.androidToolbarColor}
          barStyle={'dark-content'}
          animated
        />
        {children}
      </>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
