import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/home"

export default function App() {
  return (
   <HomeScreen/>
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
