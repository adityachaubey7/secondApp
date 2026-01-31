import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}> Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image   
        source={{
          uri:'https://www.rd.com/wp-content/uploads/2024/12/Tourist-taking-picture-of-the-majestic-and-iconic-Buckingham-Palace-in-London-GettyImages-1859655828_KSedit_FT.jpg'
        }} 
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[styles.title]}>Hawa Mahal</Text>
          <Text style={styles.cardLevel}>pink City Jaipur</Text>
          <Text style={styles.cardDescription} >the Hawa mahl is a palace in the city of jaypur  India built  from red and pink sandstone.it is on the edge of the City palace
            </Text>
            <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText:{
    fontSize:26,
    fontWeight:"bold",
    marginHorizontal:7,
    marginVertical:15,
    color:"white"

  },
  card:{
    width:390,
    height:390,
    borderRadius:10,
    marginHorizontal:15,
    paddingVertical:10
  },
  cardElevated:{
    backgroundColor:"white"
  },
  cardImage:{
    height:180,
    marginBottom:6,
    borderTopLeftRadius:6,
    borderTopRightRadius:26
  },
  cardBody:{
    flex :1,
    flexGrow:1,
    paddingHorizontal:12
  },
  title:{
    color:'#000000',
    fontSize:22,
    fontWeight:"bold",
    
  },
  cardLevel:{
    color:'#000000',
    fontWeight:"bold",
    fontSize:15,
    marginBottom:12
  },
  cardDescription:{
    color:'#2C3A47',
    marginBottom:9,
    fontSize:13,
    marginTop:6,
    flexShrink:1,
    


  
  },
  cardFooter:{
    color:'#000000',

  }
})
