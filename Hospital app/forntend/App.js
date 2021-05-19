import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './Screens/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
       <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
