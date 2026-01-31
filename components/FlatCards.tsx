import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

function flatcards() {
    return (
        <View >
            <Text style={styles.HeadingText}>flat cards</Text>
            <ScrollView horizontal={true}style={styles.container}>
                < View style={[styles.card,styles.cardOne]}>
                    <Text style={styles.text}>Red </Text>
                </View>
                < View style={[styles.card,styles.cardTwo]}>
                    <Text style={styles.text}>blue </Text>
                </View>
                < View style={[styles.card,styles.cardThree]}>
                    <Text style={styles.text}>grey </Text>
                </View>
                < View style={[styles.card,styles.cardOne]}>
                    <Text style={styles.text}>Red </Text>
                </View>
                < View style={[styles.card,styles.cardTwo]}>
                    <Text style={styles.text}>blue </Text>
                </View>
                < View style={[styles.card,styles.cardThree]}>
                    <Text style={styles.text}>grey </Text>
                </View>
            </ScrollView>
    </View >
  )
}
export default flatcards;

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:26,
        fontWeight:"bold",
        paddingHorizontal:8,
        color:"white",
        marginHorizontal:6,
        marginVertical:4

        
    },
    container: {
        flex:1,
        padding:10,
        gap:10,
        flexDirection:"row",
        color:"white"
    },
    card: {
        flex :1,
        alignItems:"center",
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:8,
        padding:10,
        margin:10
    },
    cardOne:{
        backgroundColor:"red",
        // borderRadius:8
    },
    cardTwo:{
        backgroundColor:"blue"
    }, cardThree:{
        backgroundColor:"grey",
        // borderRadius:8
    },
    text:{
        color:"white"
    }

})