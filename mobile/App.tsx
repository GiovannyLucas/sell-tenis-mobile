import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppRoutes from './src/routes/app.routes';
import { theme } from './src/styles/global';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AppRoutes />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
