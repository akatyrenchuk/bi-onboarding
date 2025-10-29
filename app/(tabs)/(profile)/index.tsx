import { StyleSheet } from 'react-native';
import {ThemedText, ThemedView} from "@/components/Themed";

import InterestsScreen from "@/components/InterestsScreen";


export default function ProfileScreen() {
  return (
    <InterestsScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  }
});
