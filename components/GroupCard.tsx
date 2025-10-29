import {ThemedText, ThemedView} from "./Themed";
import {Pressable, View, ViewProps} from "react-native";
import {IconSymbol, IconSymbolProps} from "@/components/IconSymbol";
import {ms, ScaledSheet} from "react-native-size-matters";
import React from "react";
import {useRouter} from "expo-router";
import {Image} from "expo-image";
import GroupEntity from "@/typing/entities/group";

export type SettingsItemProps = ViewProps & {
  title: string;
  screen?: string;
  url?: string;
  onPress?: () => void;
  icon?: IconSymbolProps["name"];
  customIcon?: React.ReactNode;
};

export default function GroupCard({
  name,
  description,
  url,
}: GroupEntity) {
  const lineColor = "#000";
  const iconColor = "#000";

  return (
    <View style={[{ borderColor: lineColor }, styles.item]}>
      <Image
        source={url}
        style={{
          width: ms(60),
          height: ms(60),
          borderRadius: 999,
        }}
        contentFit={"cover"}
      />
      <View style={styles.labelContainer}>
        <ThemedText type={"title"}>{name}</ThemedText>
        <ThemedText>{description}</ThemedText>
      </View>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <IconSymbol color={iconColor} name={"chevron.right"} size={ms(16)}/>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  item: {
    borderRadius: ms(4),
    borderWidth: 1,
    borderColor: '#D5DDE4',
    flexDirection: 'row',
    padding: ms(12),
    width: '100%',
    gap: ms(12),
  },
  labelContainer: {
    gap: "6@ms",
    flex: 1
  }
});