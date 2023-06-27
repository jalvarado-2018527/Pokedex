import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'

const Stack = createStackNavigator()

export default function AcoountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Cuenta'
                component={Account}
                options={{ title: 'Mi cuenta' }} />
        </Stack.Navigator>
    )
}