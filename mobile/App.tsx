import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import AppRoutes from './src/routes/app.routes';
import { theme } from './src/styles/global';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AppRoutes />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
