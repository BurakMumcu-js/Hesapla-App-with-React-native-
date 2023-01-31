import React from "react";
import { View, Text } from "react-native";
import propTypes from 'prop-types';

export default class index extends React.Component
{
    render(){
        return <View>
            <Text>{this.props.FullName}{this.props.Age}</Text>
        </View>
    }
}

index.propTypes = {
    FullName:propTypes.string.isRequired,
    Age:propTypes.number.isRequired
}
index.defaultProps = {
    FullName:'Ali Veli',
    Age:25
}
