import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import {ThemedText, ThemedView} from "@/components/Themed";
import InterestsSwiper from "@/components/InterestsSwiper";
import * as Progress from 'react-native-progress';
import {ScaledSheet, ms} from "react-native-size-matters";
import {
  widthPercentageToDP
} from 'react-native-responsive-screen';

export default function InterestsScreen() {
  const progressWidth = widthPercentageToDP('100%') - ms(48);
  return (
   <ThemedView style={styles.container}>
     <View style={styles.subContainer}>
       <ThemedText type={"titleLarge"}>Choose your interests, swipe left to select</ThemedText>
       <Progress.Bar progress={0.3} width={progressWidth} />
     </View>
     <View>
      <InterestsSwiper/>
     </View>
   </ThemedView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    // backgroundColor: 'black',
    position: "relative",
  },
  subContainer: {
    paddingHorizontal: '24@ms'
  }
});