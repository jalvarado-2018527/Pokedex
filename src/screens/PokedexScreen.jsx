import { SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonApi, getPokemonDatailByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function PokedexScreen() {
  const [pokemon, setPokemon] = useState([])
  

  // nos sirve para mandar a llamar a otra peticion al momento de hacer una petiion

  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {

    ((async () => {
      await loadPokemon()
    })())

  }, [])


  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl)

      setNextUrl(response.next)


      const pokemonArray = []

      for await (const poke of response.results) {
        const pokemonDatail = await getPokemonDatailByUrlApi(poke.url)


        pokemonArray.push({
          id: pokemonDatail.id,
          name: pokemonDatail.name,
          type: pokemonDatail.types[0].type.name,
          order: pokemonDatail.order,
          image: pokemonDatail.sprites.other['official-artwork'].front_default,
          stats: pokemonDatail.stats[0]
        })
      }
      setPokemon([...pokemon, ...pokemonArray])

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList listPokemon={pokemon} loadPokemon ={loadPokemon} isNext={nextUrl} />
    </SafeAreaView>
  )
}