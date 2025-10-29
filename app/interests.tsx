import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import {ThemedText, ThemedView} from "@/components/Themed";
import InterestsSwiper from "@/components/InterestsSwiper";
import * as Progress from 'react-native-progress';
import {ScaledSheet, ms} from "react-native-size-matters";
import {
  widthPercentageToDP
} from 'react-native-responsive-screen';
import {IconSymbol} from "@/components/IconSymbol";

export default function InterestsScreen() {
  const progressWidth = widthPercentageToDP('100%') - ms(48);
  return (
    <ThemedView style={styles.container}>
      <View style={styles.subContainer}>
        <Progress.Bar progress={0.1} width={progressWidth} />
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
        <InterestsSwiper/>
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