import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/FavoriteScreen'

const Stack = createStackNavigator()

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
            <Stack.Screen
             name='favorite' 
             component={FavoriteScreen} 
             options={{title: 'Favoritos'}} />
    </Stack.Navigator>
  )
}