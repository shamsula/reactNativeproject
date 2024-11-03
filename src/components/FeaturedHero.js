// src/components/FeaturedHero.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FeaturedHero = () => {
  return (
    <View style={styles.heroContainer}>
      <Image
        source={require('../../assets/featured-image.jpg')}
        style={styles.heroImage}
      />
      <Text style={styles.heroTitle}>Featured Artwork</Text>
      <Text style={styles.heroDescription}>
        This artwork is a stunning piece that showcases the beauty of modern art.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  heroDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default FeaturedHero;
