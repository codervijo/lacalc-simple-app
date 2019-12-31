import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcScreen from './src/screens/CalcScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CalcScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
