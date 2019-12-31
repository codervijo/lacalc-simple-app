import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import TextField from '@material-ui/core/TextField';
//import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const NumberButton = props => {
    return (
        <View>
        <Text>
        <Grid item xs={2} style={{marginTop: '20px'}}>
             <Button 
                variant="contained" 
                size="large" 
                style={{maxWidth:  '100px',
                        maxHeight: '120px',
                        minWidth:  '100px', 
                        minHeight: '120px'}} 
                color="primary" 
                aria-label="add" >
                 <h2 style={{fontSize:35}}>{props.no}</h2>
             </Button>
        </Grid>
        </Text>
        </View>
    )
}

export default NumberButton;
