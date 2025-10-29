import {Animated, ScrollView, StyleSheet} from "react-native";
import {ThemedView, useThemeColor} from "@/components/Themed";
import { groupsList} from "@/dummy-data/groups";
import GroupCard from "@/components/GroupCard";
import {ScaledSheet} from "react-native-size-matters";

export default function GroupsScreen() {
  const backgroundColor = useThemeColor({ }, 'background');

  return (
    <ScrollView style={{backgroundColor}} contentContainerStyle={[styles.container]}>
      {groupsList.map((group, index) => (
        <GroupCard key={group.name} {...group}></GroupCard>
      ))}
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  container: {
    padding: '12@ms',
    gap: '12@ms'
  },
  sectionContainer: {
    gap: '12@ms'
  }
});
