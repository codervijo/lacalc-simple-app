import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NumberButton = props => {
    return (
            <TouchableOpacity
                style={{flex:1}}
                onClick={props.handleClick}>
                <View
                    style={{
                      backgroundColor: 'blue',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 15,
                      padding: 15,
                      margin:4
                    }}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                    {props.no}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    NumberStyle: {
        fontSize: 35
    }
})

export default NumberButton;
