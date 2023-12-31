import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'

export default function PokemonStats({ estadisticas }) {
  const barStyles = (num) => {

    let bgColorized;

    if (num <= 25) {

        bgColorized = "#ff3e3e";

    } else if (num > 25 && num < 50) {

        bgColorized = "#F08700";

    } else if (num >= 50 && num < 75) {

        bgColorized = "#EFCA08";

    } else if (num >= 75) {

        bgColorized = "#6EEB83";
    }
    return {
        backgroundColor: bgColorized,
        width: `${num}%`,
    };
};

  
  
  return (
    <View style= {styles.content}>
      <Text style={styles.tittle}>Estadisticas base</Text>
      {map(estadisticas, (item, index) => (
        <View key={index} style ={styles.block}>
            <View style={styles.blockTittle}>
              <Text style={styles.statName}>{item.stat.name}</Text>
            </View>

            <View style= {styles.blocInfo}>
              <Text style= {styles.number}>{item.base_stat}</Text>
              <View style= {styles.bgBar}>
                <View style = {[styles.bar, barStyles(item.base_stat)]}/>
              </View>
            </View>
          </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    content:{
      paddingHorizontal: 20,
      marginTop: 40,
      marginBottom: 80
    },
    tittle: {
      fontWeight: 20,
      paddingTop: 40,
      marginBottom: 80
    },
    block: {
      flexDirection: 'row',
      paddingVertical: 5
    },

    blockTittle: {
      width: "30%",
    },

    statName: {
      fontSize: 12,
      color: '#B0ADBB'
    },

    blocInfo:{
      width: "70%",
      flexDirection: 'row',
      alignItems: 'center'
    },

    number:{
      width: "12%",
      fontSize: 12
    },

    bgBar:{
      backgroundColor: '#dedede',
      width: "80%",
      height: 5,
      borderRadius: 20,
      overflow: 'hidden'
    },

    bar: {
      height: 5,
      borderRadius: 20
    }


})


