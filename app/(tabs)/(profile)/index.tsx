import { StyleSheet } from 'react-native';
import {ThemedText, ThemedView} from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <ThemedView>Profile</ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  }
});
