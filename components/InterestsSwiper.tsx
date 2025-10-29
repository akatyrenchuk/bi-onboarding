import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import Swiper from 'react-native-deck-swiper';
import SwiperCard from "@/components/SwiperCard";
import * as Progress from 'react-native-progress';
import {ThemedView} from "@/components/Themed";

const interests = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

export default function InterestsSwiper() {

  function handleDislike() {
    console.log('Liked');
  }

  function handleLike() {
    console.log('Disliked');
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={interests}
        renderCard={(interest) => <SwiperCard interest={interest}></SwiperCard>}
        onSwipedLeft={handleDislike}
        onSwipedRight={handleLike}
        stackSize={interests.length}
        backgroundColor={"#fff"}
        infinite
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});