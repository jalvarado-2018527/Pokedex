
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import FavoritesNavigation from './FavoritesNavigation'
import AcoountNavigation from './AcoountNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function Navigatoion() {
  return (
   <Tab.Navigator>
     <Tab.Screen name='Cuenta' component={ AcoountNavigation } options={
        {
            tabBarLabel: "Cuenta",
            tabBarIcon: ({color , size}) =>(
                <Icon name ='user' color={ color } size={ size }/>
            ),
        }
     } />
        

     <Tab.Screen name='Pokedex' component={ PokedexNavigation} options={{
      tabBarLabel: "Pokedex",
      tabBarIcon: () => renderPokeball()
     }}/>



     <Tab.Screen name='Favoritos' component={ FavoritesNavigation} options={
        {
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color , size}) =>(
                <Icon name ='heart' color={ color } size={ size }/>
            ),
        }
     }/>
   </Tab.Navigator>
       
  )
}
// rendierizando la poke ball 

const renderPokeball = () => {

  return (
    <Image
      source = { require('../assets/pokeball.png') }
      style= {{width: 30, height: 30}}
    />
  )

}