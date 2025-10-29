import { StatusBar } from 'expo-status-bar';
import {Platform, StyleSheet, TextInput, View} from "react-native";

import {ThemedButton, ThemedText, ThemedView, useThemeColor} from "@/components/Themed";
import {useUser} from "@/app/user-ctx";
import {ms, ScaledSheet} from "react-native-size-matters";
import {Image} from "expo-image";
import {IconSymbol} from "@/components/IconSymbol";
import { useRouter} from "expo-router";

export default function LoginScreen() {
  const {setStatus} = useUser();
  const router = useRouter();
  const backgroundColor = useThemeColor({ }, 'background');

  return (
    <View style={[{backgroundColor}, styles.container]}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Image
        source={'bi_logo_dark'}
        style={{
          width: ms(48),
          height: ms(48)
        }}
      />
      <ThemedText type={"titleLarge"}>Log in</ThemedText>
      <View style={styles.sectionContainer}>
        <ThemedText type={"title"}>Email</ThemedText>
        <TextInput style={styles.input} placeholder={"Your BI email"}>

        </TextInput>
      </View>
      <View style={styles.sectionContainer}>
        <ThemedText type={"title"}>Password</ThemedText>
        <TextInput style={styles.input} placeholder={"Your BI email"} secureTextEntry={true}>

        </TextInput>
      </View>
      <ThemedButton textContent={"Log in"} onPress={() => {
        // setStatus("ready");
        router.navigate("/interests");
      }}/>
      <View style={{
        alignSelf: "flex-end",
        borderBottomWidth: 3,
        borderBottomColor: '#597694'
      }}>
        <ThemedText type={"defaultBold"}>Forgot your password?</ThemedText>
      </View>
      <View/>
      <View/>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{
          borderBottomWidth: 3,
          borderBottomColor: '#597694'
        }}>
          <ThemedText type={"defaultBold"}>Help</ThemedText>
        </View>
        <IconSymbol name={"globe"} color={'#597694'} weight={"bold"} size={ms(24)}/>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '12@ms',
    gap: '24@ms'
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
  sectionContainer: {
    gap: '6@ms'
  },
  input: {
    paddingVertical: '12@ms',
    paddingHorizontal: '12@ms',
    borderWidth: '0.5@ms',
    borderRadius: '4@ms',
    borderColor: '#597694'
  }
});
