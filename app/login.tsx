import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {ThemedButton, ThemedText, ThemedView} from "@/components/Themed";
import {useUser} from "@/app/user-ctx";

export default function LoginScreen() {
  const {setStatus} = useUser();

  return (
    <ThemedView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <ThemedText style={styles.title}>Modal</ThemedText>
      <ThemedView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ThemedButton textContent={"Close modal"} onPress={() => setStatus("ready")}/>
      <EditScreenInfo path="app/modal.tsx" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
