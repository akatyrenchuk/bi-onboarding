import React from 'react';
import {StyleSheet} from "react-native";
import { ThemedText, ThemedView } from './Themed';

export default function SwiperCard({interest}: {interest: string}) {
  return (
    <ThemedView style={styles.card}>
      <ThemedText style={styles.text}>{interest}</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 0.75,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    backgroundColor: '#0A2239',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  }
});