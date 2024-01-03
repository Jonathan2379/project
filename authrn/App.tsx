import 'react-native-gesture-handler'; 
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthContex from './src/contexts/auth';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
