import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ActionCard from './components/ActionCard';
import ContantList from './components/ContactList';
import ElevatedCards from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
import FlatCards from './components/FlatCards';


 function AppPro() {
  return (
    <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <ElevatedCards/>
        <ContantList/>
        <FancyCards/>
        <ActionCard/>
    </ScrollView>
  )
}
export default AppPro;

const styles = StyleSheet.create({
    container:{
        padding:30,
        fontSize:30
    }
})