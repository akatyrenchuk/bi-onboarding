import { StyleSheet } from 'react-native';
import {ThemedText, ThemedView} from "@/components/Themed";
import Swiper from 'react-native-deck-swiper';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <Swiper
        cards={['Card 1', 'Card 2', 'Card 3']}
        renderCard={(card) => <ThemedText>Test</ThemedText>}
        onSwipedLeft={() => console.log('Dislike')}
        onSwipedRight={() => console.log('Like')}
        stackSize={3}
      />
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
