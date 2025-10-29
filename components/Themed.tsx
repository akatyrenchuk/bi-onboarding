/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {Pressable, PressableProps, Text as DefaultText, View as DefaultView} from "react-native";

import Colors from '@/constants/Colors';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useColorScheme} from "@/hooks/useColorScheme";
import {ScaledSheet} from "react-native-size-matters";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "titleLarge" | "defaultLight" | "defaultSemiBold" | "defaultBold" | "extraSmall" | "extraSmallLight" | "small" | "smallSemiBold" | "extraSmallSemiBold" | "extraSmallBold" | "smallBold";
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function ThemedText(props: TextProps) {
  const { style, lightColor, darkColor, type = "default", ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[
    { color },
    type === "default" ? themedTextStyles.default : undefined,
    type === "title" ? themedTextStyles.title : undefined,
    type === "titleLarge" ? themedTextStyles.titleLarge : undefined,
    type === "defaultLight" ? themedTextStyles.defaultLight : undefined,
    type === "defaultSemiBold" ? themedTextStyles.defaultSemiBold : undefined,
    type === "defaultBold" ? themedTextStyles.defaultBold : undefined,
    type === "extraSmall" ? themedTextStyles.extraSmall : undefined,
    type === "extraSmallLight" ? themedTextStyles.extraSmallLight : undefined,
    type === "extraSmallSemiBold" ? themedTextStyles.extraSmallSemiBold : undefined,
    type === "extraSmallBold" ? themedTextStyles.extraSmallBold : undefined,
    type === "small" ? themedTextStyles.small : undefined,
    type === "smallSemiBold" ? themedTextStyles.smallSemiBold : undefined,
    type === "smallBold" ? themedTextStyles.smallBold : undefined,
    style
  ]} {...otherProps} />;
}

export const themedTextStyles = ScaledSheet.create({
  title: {
    fontSize: "16@ms",
    fontFamily: "MuseoSans700"
  },
  titleLarge: {
    fontSize: "20@ms",
    fontFamily: "MuseoSans700"
  },
  default: {
    fontSize: "14@ms",
    fontFamily: "MuseoSans500"
  },
  defaultLight: {
    fontSize: "14@ms",
    fontFamily: "MuseoSans300"
  },
  defaultSemiBold: {
    fontSize: "14@ms",
    fontFamily: "Nacelle-SemiBold"
  },
  defaultBold: {
    fontSize: "14@ms",
    fontFamily: "MuseoSans700"
  },
  small: {
    fontFamily: "MuseoSans500",
    fontSize: "12@ms"
  },
  smallSemiBold: {
    fontFamily: "MuseoSans500",
    fontSize: "12@ms"
  },
  smallBold: {
    fontSize: "12@ms",
    fontFamily: "MuseoSans700"
  },
  extraSmall: {
    fontSize: "10@ms",
    fontFamily: "MuseoSans500"
  },
  extraSmallSemiBold: {
    fontSize: "10@ms",
    fontFamily: "MuseoSans500"
  },
  extraSmallBold: {
    fontSize: "10@ms",
    fontFamily: "MuseoSans700"
  },
  extraSmallLight: {
    fontSize: "10@ms",
    fontFamily: "MuseoSans300"
  }
});

export function ThemedView(props: ViewProps) {
  const insets = useSafeAreaInsets();
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <DefaultView style={[{
      backgroundColor,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,

    }, style]} {...otherProps} />
  );
}

type ThemedButtonProps = PressableProps & {
  textContent: string;
};
export function ThemedButton({
  textContent, style, onPress, ...otherProps
}: ThemedButtonProps) {

  return (
    <Pressable style={styles.container} onPress={onPress} {...otherProps}>
      <ThemedText type={"defaultBold"} style={{color: 'white'}}>{textContent}</ThemedText>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#0a64ff',
    padding: '12@ms',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4@ms',
  }
});