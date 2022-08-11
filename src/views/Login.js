import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React, { useContext } from "react";
import { TradeContext } from '../context/Context';

export default function Login() {
    const context = useContext(TradeContext);

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:context.colors.primary
        },
        text:{
            color:context.colors.text
        }
    })

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={context.colors.primary} barStyle={context.theme=="Light"?"dark-content":"light-content"}/>
        
      <Text style={styles.text}>Login</Text>

    </View>
  )
}