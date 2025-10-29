import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Themed';
import { groupsList} from "@/dummy-data/groups";
import GroupCard from "@/components/GroupCard";

export default function GroupsScreen() {
  return (
    <ThemedView style={styles.container}>
      {groupsList.map((group, index) => (
        <GroupCard title={group.name} key={group.name}></GroupCard>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
