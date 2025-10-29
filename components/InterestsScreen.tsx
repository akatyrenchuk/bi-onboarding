import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import {ThemedView} from "@/components/Themed";
import InterestsSwiper from "@/components/InterestsSwiper";
import * as Progress from 'react-native-progress';

export default function InterestsScreen() {

  return (
   <ThemedView style={styles.container}>
     <Progress.Bar progress={0.3} width={300} />
     <InterestsSwiper/>
   </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  }
});