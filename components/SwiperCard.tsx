import React from 'react';
import {StyleSheet, View} from "react-native";
import { ThemedText, ThemedView } from './Themed';
import {ScaledSheet} from "react-native-size-matters";
import {Image} from 'expo-image'
import InterestEntity from "@/typing/entities/interest";

type SwiperCardProps = {
  interest: InterestEntity;
}
export default function SwiperCard({
  interest
}: SwiperCardProps) {
  console.log(interest.imageUrl)
  return (
    <View style={styles.card}>
      <ThemedText type={"titleLarge"}>{interest.name}</ThemedText>
      <View style={styles.imageContainer}>
        <Image source={{uri: interest.imageUrl}} style={styles.image} contentFit={"cover"}/>
      </View>
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
  imageContainer: {
    width: '100%',
    paddingTop: '12@ms',
  },
  image: {
    width: '100%',
    height: '90%',
  }
});