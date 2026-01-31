import { StyleSheet, Text, View, Linking, Image,TouchableOpacity} from 'react-native'
import React from 'react'

function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)

  }
  return (
    <View>
      <Text style={styles.headingText} >Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: "https://images3.alphacoders.com/561/thumb-1920-561698.jpg"
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            just like every year javascript brings in new feature.
            This yearjavascript bringing 4 new features,whic are
            almost in production rollout.i won't be wasting more time
            and directly just to code and easy to understand examples.!
          </Text>

        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity
         onPress={()=>openWebsite("")}
         >
          <Text style={styles.socialLinks}>Read More</Text>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={()=>openWebsite("")}
         >
          <Text style={styles.socialLinks}>Follow More</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard;
const styles = StyleSheet.create({
  headingText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    paddingHorizontal:8,
    margin:10,

  },
  card:{
    width:390,
    height:380,
    borderRadius:6,
    marginVertical:12,
    margin:10
  },
  elevatedCard: {
    backgroundColor:"white",
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
    borderRadius:12

  },
  headingContainer: {
    height:30,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  headerText: {
    color:"black",
    fontSize:16,
    fontWeight:"600"
  },
  cardImage: {
    height:250
  },
  bodyContainer: {
    padding:8,
    marginBottom:3
   
  },
  footerContainer:{
    padding:8,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-evenly"
  },
  socialLinks:{
    fontSize:16,
    backgroundColor:"red",
    paddingHorizontal:20
  }

})