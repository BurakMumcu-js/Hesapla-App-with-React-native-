import React from "react";
import { View, text } from "react-native";
import Welcome from './Welcome'

export default class index extends React.Component
{
    render(){
        return <View>
            <Welcome FullName={"Burak Mumcu"}/>
            <Welcome Age={21}/>
        </View>
    }
}
