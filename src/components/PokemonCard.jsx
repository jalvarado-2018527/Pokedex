import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorbyPokemonType from '../utils/getColorbyPokemonType'
import capitalize from 'lodash.capitalize'
import { useNavigation } from '@react-navigation/native'



export default function PokemonCard({ pokemonItem }) {

    const navegar = useNavigation()

    const pokemonColor = getColorbyPokemonType(pokemonItem.type)

    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}

    const goToPokemon = () => {

       navegar.navigate('Pokemon', {id : pokemonItem.id} );
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>{pokemonItem.order}</Text>
                        <Text style={styles.name}>{pokemonItem.name}</Text>
                        <Image style={styles.images}
                         source={{ uri: pokemonItem.image }}
                        />
                      
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
       flex: 1,
       borderRadius: 15,
       padding: 10
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#FFF',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10

    },

    images: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },


})