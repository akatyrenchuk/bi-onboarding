import {ThemedText, ThemedView} from "./Themed";
import {Pressable, View, ViewProps} from "react-native";
import {IconSymbol, IconSymbolProps} from "@/components/IconSymbol";
import {ms, ScaledSheet} from "react-native-size-matters";
import React from "react";
import {useRouter} from "expo-router";
import {openBrowserAsync} from "expo-web-browser";

export type SettingsItemProps = ViewProps & {
  title: string;
  screen?: string;
  url?: string;
  onPress?: () => void;
  icon?: IconSymbolProps["name"];
  customIcon?: React.ReactNode;
};

export default function GroupCard({
                                       title,
                                       screen,
                                       url,
                                       icon,
                                       customIcon,
                                       onPress,
                                       style,
                                       ...rest
                                     }: SettingsItemProps) {
  const lineColor = "#000";
  const iconColor = "#000";
  const router = useRouter();

  return (
    <Pressable onPress={() => !!screen ? router.navigate(screen) : !!url ? openBrowserAsync(url) : onPress?.()}>
      <ThemedView style={[{ borderColor: lineColor }, styles.item, style]} {...rest}>
        <View style={styles.labelContainer}>
          {icon && <IconSymbol color={iconColor} name={icon} size={ms(24)}/>}
          {!!customIcon && customIcon}
          <ThemedText>{title}</ThemedText>
        </View>
        <IconSymbol color={iconColor} name={"chevron.right"} size={ms(16)}/>
      </ThemedView>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: "0.5@ms",
    paddingHorizontal: "12@ms",
    paddingVertical: "16@ms"
  },
  labelContainer: {
    gap: "6@ms",
    flexDirection: "row",
    alignItems: "center"
  }
});