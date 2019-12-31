import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import TextField from '@material-ui/core/TextField';

const InputField = props => {
    return (
            <TextInput
                style={{ marginTop:30, marginLeft:30, width:'80%', height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={t => props.handleInput(t)}
                onKeyDown={props.handleKeys}
                onSubmitEditing={t => props.handleSubmit(t)}
                value={props.data.currentValue}
                label={props.data.label}
                autoCorrect={false}
                autoCapitalize="none"
            />

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