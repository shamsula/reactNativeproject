import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Art Gallery</Text>
      <Text style={styles.subheading}>Discover Beautiful Art</Text>
      <Text style={styles.text}>Explore a wide collection of artworks from talented artists worldwide.</Text>
      
      <View style={styles.card}>
        <Text style={styles.text}>Sample artwork description...</Text>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
