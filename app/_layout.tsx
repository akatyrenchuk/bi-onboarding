import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {Stack, useRouter} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {useColorScheme} from "react-native";
import UserProvider, {useUser} from "@/app/user-ctx";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {
  const [loaded, error] = useFonts({
    MuseoSans300: require('@/assets/fonts/MuseoSans_300.otf'),
    MuseoSans300Italic: require('@/assets/fonts/MuseoSans_300_Italic.otf'),
    MuseoSans500: require('@/assets/fonts/MuseoSans_500.otf'),
    MuseoSans500Italic: require('@/assets/fonts/MuseoSans_500_Italic.otf'),
    MuseoSans700: require('@/assets/fonts/MuseoSans_700.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <RootLayoutNav />
    </UserProvider>
);
}

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const {status} = useUser();
  const router = useRouter()

  useEffect(() => {
    router.navigate('/login')
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Protected guard={status === "idle"}>
        <Stack.Screen
          name="login"
          options={{
            gestureEnabled: false,
            presentation: 'modal',
            title : "Welcome to BI 👋",
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
