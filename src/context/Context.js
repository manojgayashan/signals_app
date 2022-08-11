import React, { createContext, useState , useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar, StyleSheet,useColorScheme,View} from 'react-native';

export const TradeContext = createContext();

export const TradeProvider = ({ children }) => {

    const [theme, setTheme] = useState("Light");
    const [colors, setColors] = useState({primary:"white",text:"black",headingtext:'#1B0A30'})
    const colorScheme = useColorScheme();

  const changeTheme = ()=>{
    var color = theme
    if(theme=="System"){
        color=colorScheme
    }
        if(color=="Light"){
            setColors({
                primary:"white",
                text:"black",
                headingtext:"#1B0A30",
            })
        }
        else if(color=="Dark"){
            setColors({
                primary:"black",
                text:"rgba(255,255,255,0.8)",
                headingtext:"white",
            })
        }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:colors.primary,
        justifyContent: 'center',

      },
    leftalignedcontainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor:colors.primary,
        justifyContent: 'flex-start',
        paddingLeft:20
      },
    heading: {
        fontSize: 42,
        fontWeight: '100',
        textAlign: 'center',
        color:colors.headingtext
      },
    smallHeading: {
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center',
        color:colors.headingtext
      },
    text: {
        fontSize: 16,
        fontWeight: '100',
        textAlign: 'center',
        color:colors.text
      },
  })
  return (
    <TradeContext.Provider
      value={{
        theme,
        setTheme,
        colors,
        setColors,
        changeTheme,
        styles
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};