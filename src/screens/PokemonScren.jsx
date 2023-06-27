import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDatailsApi } from '../api/pokemon'
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonTyoe from '../components/Pokemon/PokemonTyoe';
import PokemonStats from '../components/Pokemon/PokemonStats';

export default function PokemonScren({ navigation, route: { params } }) {

  const [pokemon, setPokemon] = useState(null)

  const { id } = params;

  console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const respuesta = await getPokemonDatailsApi(id)
        setPokemon(respuesta)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <View>
      <ScrollView>
        <PokemonHeader
          nombre={pokemon.name}
          numero={pokemon.order}
          image={pokemon.sprites.other["official-artwork"].front_default}
          tipo={pokemon.types[0].type.name} />
        <PokemonTyoe tipos={pokemon.types} />
        <PokemonStats estadisticas={pokemon.stats} />
      </ScrollView>
    </View>
  )
}