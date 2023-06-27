import { FlatList, Platform, StyleSheet, Text } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'
import { ActivityIndicator } from 'react-native-paper'


export default function PokemonList({listPokemon, loadPokemon,  isNext}) {
  
  
  const loadMOre = () => {
    loadPokemon()
  }

  

  return (
    <FlatList
      data={listPokemon}
      numColumns= {2}
      showsVerticalScrollIndicator ={ false}
      keyExtractor = { (poke) => String(poke.id) }
      //randerItem= {({item}) => <Text> {Item.name }</Text>}
      renderItem={({item}) => <PokemonCard pokemonItem={item}/>}
      contentContainerStyle={ styles.flatListContentContainer}
      onEndReached={isNext && loadMOre}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
      
      isNext &&(
        <ActivityIndicator
        size='large'
        style={styles.spinner}
        color='#AEAEAE'
        />
      )
      }
      
      
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ?  30 : 0
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60
  }
}) 