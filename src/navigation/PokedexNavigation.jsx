import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokedexScreen from '../screens/PokedexScreen'
import PokemonScren from '../screens/PokemonScren'
import { Title } from 'react-native-paper'

const Stack = createStackNavigator()


export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Pokedex'
                component={PokedexScreen}
                options={{ title: "", headerTransparent: true }}
            />
            <Stack.Screen 
            name="Pokemon" 
            component={PokemonScren}
            options=
            {{ title: "",
             headerShown: 
             true, headerTransparent: 
             true, headerShadowVisible: false }}

            />
        </Stack.Navigator>
    )
}