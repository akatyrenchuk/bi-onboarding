import React from 'react';
import {StyleSheet, View} from "react-native";
import { ThemedText, ThemedView } from './Themed';
import {ScaledSheet} from "react-native-size-matters";

export default function SwiperCard({interest}: {interest: string}) {
  return (
    <View style={styles.card}>
      <ThemedText type={"titleLarge"}>{interest}</ThemedText>
    </View>
  )
}

const styles = ScaledSheet.create({
  card: {
    flex: 0.5,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '24@ms',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    paddingVertical: '12@ms',
  },

});