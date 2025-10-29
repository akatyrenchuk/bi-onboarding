import React from "react";
import {DynamicColorIOS, Platform} from "react-native";
import {useColorScheme} from "@/hooks/useColorScheme";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {Icon, Label, NativeTabs, VectorIcon} from "expo-router/unstable-native-tabs";
import {useThemeColor} from "@/hooks/useThemeColor";
import Colors from "@/constants/Colors";

export default function TabsLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const highlightBackground = useThemeColor({}, "highlightBackground");

  const selectedTint =
    Platform.OS === "ios"
      ? DynamicColorIOS({ light: Colors[colorScheme].tabIconSelected, dark: Colors[colorScheme].tabIconSelected })
      : Colors[colorScheme].tabIconSelected;

  const backgroundColor =
    Platform.OS === "ios"
      ? DynamicColorIOS({ light: highlightBackground, dark: highlightBackground })
      : highlightBackground;

  return (
    <NativeTabs
      tintColor={selectedTint}
      backgroundColor={backgroundColor}
      disableTransparentOnScrollEdge
      blurEffect="none"
    >
      {/* Home / (dashboard) */}
      <NativeTabs.Trigger name="(home)">
        <Label>{"Home"}</Label>
        {Platform.select({
          ios: <Icon sf={{ default: "house", selected: "house.fill" }}/>,
          android: (
            <Icon
              src={<VectorIcon family={MaterialCommunityIcons} name="home"/>}
            />
          )
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(map)">
        <Label>{"Map"}</Label>
        {Platform.select({
          ios: (
            <Icon
              sf={{
                default: "map",
                selected: "map.fill"
              }}
            />
          ),
          android: (
            <Icon
              src={<VectorIcon family={MaterialCommunityIcons} name="map"/>}
            />
          )
        })}
      </NativeTabs.Trigger>
      {/* Wallet / (wallet) */}
      <NativeTabs.Trigger name="(groups)">
        <Label>{"Groups"}</Label>
        {Platform.select({
          ios: (
            <Icon
              sf={{
                default: "person.3",
                selected: "person.3.fill"
              }}
            />
          ),
          android: (
            <Icon
              src={
                <VectorIcon family={MaterialCommunityIcons} name="account-group"/>
              }
            />
          )
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(profile)">
        <Label>{"Profile"}</Label>
        {Platform.select({
          ios: <Icon sf={{ default: "person", selected: "person.fill" }}/>,
          android: (
            <Icon
              src={<VectorIcon family={MaterialCommunityIcons} name="account-outline"/>}
            />
          )
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}