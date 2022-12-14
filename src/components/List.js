import React, { useContext, useState , useEffect } from "react";
import { View, Text,StyleSheet, TouchableOpacity , StatusBar } from 'react-native'
import commanStyles from "../constants/styles";
import { TradeContext } from "../context/Context"

const List = ({
        heading,
        content,
})=>{
    
    const context = useContext(TradeContext);
return(
    <View style={commanStyles.list}>
        <Text style={context.styles.text}>{heading}</Text>
        {content}
        <View style={{backgroundColor:'gray',height:1,width:"80%"}} />
    </View>
)
}

export default List;