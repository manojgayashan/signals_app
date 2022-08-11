import { View, Text,StyleSheet, TouchableOpacity , StatusBar } from 'react-native'
import React, { useContext } from "react";
import { TradeContext } from '../context/Context';
import commanStyles from '../constants/styles';
import List from '../components/List';

export default function Settings() {
    const context = useContext(TradeContext);

    const style = StyleSheet.create({
        container:{
            backgroundColor:context.colors.primary
        },
        text:{
            color:context.colors.text
        }
    })

    const toggleTheme=()=>{
        var theme = context.theme
        context.setTheme(context.theme=="Light"?"Dark":"Light")
        context.changeTheme()
    }
  return (
    <View style={context.styles.leftalignedcontainer}>
        <StatusBar backgroundColor={context.colors.primary} barStyle={context.theme=="Dark"?"dark-content":"light-content"}/>
        
      <Text style={context.styles.smallHeading}>Settings</Text>
        
    <List 
        heading={"THEME"}
        content={
            <TouchableOpacity onPress={()=>{toggleTheme()}}>
            <View>
                <Text style={context.styles.text}>Change Theme</Text>
            </View>
        </TouchableOpacity>
        }
    />
         
    <List 
        heading={"THEME"}
        content={
            <TouchableOpacity onPress={()=>{toggleTheme()}}>
            <View>
                <Text style={context.styles.text}>Change Theme</Text>
            </View>
        </TouchableOpacity>
        }
    />  

    </View>
  )
}