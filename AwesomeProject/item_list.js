import React from "react";
import { View,Text,StyleSheet } from "react-native";

const itemList = ({text}) => {
return (<View style={Style.textList}><Text>{text}</Text></View>)
}
const style = StyleSheet.create({
    textList:{fontSize:20,margin:5,color:'black',textAlign:'center'},
})

export default itemList;
