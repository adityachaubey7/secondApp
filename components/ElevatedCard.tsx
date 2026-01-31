import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

function ElevatedCards() {
  return (
    <View >
        <Text style={styles.HeadingText}>Elevated cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}>tap</Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}> me  </Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}> to  </Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}> increasing </Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}> the  </Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
            <Text style={styles.Text}> content </Text>
        </View>
        <View style={[styles.card,styles.CardElevated]}>
        <Text style={styles.Text}>aditya </Text>
        </View>
     </ScrollView>
    </View>
  )
}
export default ElevatedCards;

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:26,
        fontWeight:"bold", 
        color:"white",  
        marginHorizontal:7,
        marginVertical:8
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:10,
        margin:10,
        gap:10,
        color:"white",
       
    },
    container:{
        padding:8,

        
    },
    CardElevated:{
        backgroundColor:"silver",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"yellow",
        shadowOpacity:0.4,
        shadowRadius:2.5,
        fontWeight:"600"
    },
    textColor:{
        color:"white"
    },
    Text:{
        color:"white"
    }
})