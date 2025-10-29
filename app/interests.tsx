import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button} from "react-native";
import {ThemedText, ThemedView} from "@/components/Themed";
import InterestsSwiper from "@/components/InterestsSwiper";
import * as Progress from 'react-native-progress';
import {ScaledSheet, ms} from "react-native-size-matters";
import {
  widthPercentageToDP
} from 'react-native-responsive-screen';
import {IconSymbol} from "@/components/IconSymbol";
import {interestsList} from "@/dummy-data/interests";
import SwiperCard from "@/components/SwiperCard";
import Swiper from "react-native-deck-swiper";
import {useRouter} from "expo-router";

export default function InterestsScreen() {
  const interests = interestsList.slice(0, 5);
  const progressWidth = widthPercentageToDP('100%') - ms(48);
  const progressStep = 1 / interests.length;
  const [progress, setProgress] = useState(progressStep)
  const router = useRouter();

  useEffect(() => {
    console.log(progress)
    if(progress > 0.9) {
      router.back();
    }
  }, [progress]);

  function handleDislike() {
    setProgress(progress + progressStep);
    console.log('Liked');
  }

  function handleLike() {
    setProgress(progress + progressStep)
    console.log('Disliked');
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.subContainer}>
        <Progress.Bar progress={progress} width={progressWidth} />
        <ThemedText style={styles.infoContainerText}>Swipe to answer</ThemedText>
        <View style={styles.infoContainer}>
          <View style={styles.infoContainerChoice}>
            <IconSymbol name={"chevron.left"} color={"#002341"}></IconSymbol>
            <ThemedText type={"titleLarge"}>No</ThemedText>
          </View>
          <View style={styles.infoContainerChoice}>
            <ThemedText type={"titleLarge"}>Yes</ThemedText>
            <IconSymbol name={"chevron.right"} color={"#002341"}></IconSymbol>
          </View>
        </View>
      </View>
      <View>
        <Swiper
          cards={interests}
          renderCard={(interest) => {
            console.log(interest)
            return (
              <SwiperCard interest={interest}/>
            )
          }}
          onSwipedLeft={handleLike}
          onSwipedRight={handleDislike}
          stackSize={interestsList.length}
          backgroundColor={"#fff"}
        />
      </View>
    </ThemedView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#F5F7FA',
    position: "relative",
  },
  subContainer: {
    paddingHorizontal: '24@ms',
    gap: '12@ms',
  },
  infoContainerText: {
    textAlign: 'center',
    paddingTop: '24@ms',
  },
  infoContainer: {
    gap: '12@ms',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  infoContainerChoice: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});