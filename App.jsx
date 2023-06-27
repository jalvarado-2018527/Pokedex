import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigatoion from './src/navigation/Navigatoion';

export default function App() {
  return (
    <NavigationContainer>
      <Navigatoion/>
    </NavigationContainer>
  )
}


