import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import TextField from '@material-ui/core/TextField';

const InputField = props => {
    return (
        <View>
        <Text>
            <TextInput
                style={{ width:'80%', height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => props.handleInput(text)}
                onKeyDown={props.handleKeys}
                value={props.data.currentValue}
                label={props.data.label}
                autoCorrect={false}
                autoCapitalize="none"
            />

        </Text>
        </View>
    )
}

 //           <TextField
 //               variant='outlined'
 //               label={props.data.label}
 //               value={props.data.currentValue}
 //               name={props.data.name}
 //               onKeyDown={props.handleKeys}
 //               onChange={props.handleInput}
 //               style={{width: '80%',
 //                     justifyContent: 'center',}}
 // //          />

export default InputField;