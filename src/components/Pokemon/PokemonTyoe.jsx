import { View, Text, StyleSheet } from 'react-native'
import {map , capitalize} from 'lodash'
import getColorbyPokemonType from '../../utils/getColorbyPokemonType'

export default function PokemonTyoe({tipos}) {
  return (
    <View style={styles.content}>
      {map(tipos, (item)=>(
        <View key={item.type.url} style={{...styles.pil, backgroundColor: getColorbyPokemonType(item.type.name)}}>
            <Text>{capitalize( item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    content:{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },

    pil: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10
    }
})