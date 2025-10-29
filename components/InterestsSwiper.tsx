import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import Swiper from 'react-native-deck-swiper';
import SwiperCard from "@/components/SwiperCard";
import * as Progress from 'react-native-progress';
import {ThemedView} from "@/components/Themed";
import {interestsList} from '@/dummy-data/interests';

export default function InterestsSwiper() {

  function handleDislike() {
    console.log('Liked');
  }

  function handleLike() {
    console.log('Disliked');
  }

  return (
      <Swiper
        cards={interestsList}
        renderCard={(interest) => <SwiperCard interest={interest.name}></SwiperCard>}
        onSwipedLeft={handleLike}
        onSwipedRight={handleDislike}
        stackSize={interestsList.length}
        backgroundColor={"#fff"}
        infinite
      />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});