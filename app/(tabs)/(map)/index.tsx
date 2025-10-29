import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Themed';

export default function MapScreen() {
  return (
    <ThemedView style={styles.container}>
     
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
