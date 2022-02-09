import React from 'react'
import { StatusBar } from 'react-native';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';

//import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}