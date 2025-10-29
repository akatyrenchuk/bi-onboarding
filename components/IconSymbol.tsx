import React, {ComponentProps, type Ref, useImperativeHandle, useState} from "react";
import {OpaqueColorValue, Platform, type StyleProp, type TextStyle} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {type AnimationSpec, SymbolView, type SymbolViewProps, SymbolWeight} from "expo-symbols";
import {ms} from "react-native-size-matters";

type IconMapping = Record<SymbolViewProps["name"], ComponentProps<typeof MaterialCommunityIcons>["name"]>;
export const MAPPING = {
  "house.fill": "home",
  "chevron.right": "chevron-right",
  "chevron.left": "chevron-left",
  "chevron.down": "chevron-down",
  "qrcode.viewfinder": "qrcode-scan",
  "location": "navigation-variant-outline",
  "location.magnifyingglass": "magnify",
  "magnifyingglass": "magnify",
  "wallet.bifold": "wallet-bifold-outline",
  "person": "account-outline",
  "xmark.circle": "close-circle-outline",
  "square.on.square": "content-copy",
  "map": "map-outline",
  "line.3.horizontal.decrease": "filter-variant",
  "list.bullet": "format-list-bulleted",
  "checkmark.circle.fill": "check-circle",
  "bell.badge.fill": "bell-badge-outline",
  "bell": "bell-outline",
  "door.left.hand.open": "door-open",
  "door.left.hand.closed": "door",
  "mappin": "map-marker-outline",
  "mappin.and.ellipse": "map-marker-outline",
  "mail.and.text.magnifyingglass": "text-box-search-outline",
  "exclamationmark.magnifyingglass": "alert-circle-outline",
  "info.circle": "information-outline",
  "xmark": "close",
  "menucard": "format-list-bulleted",
  "globe": "earth",
  "cart": "cart-outline",
  "calendar": "calendar-outline",
  "lock": "lock-outline",
  "lock.open": "lock-open-outline",
  "sparkles": "star-shooting",
  "checkmark.seal.fill": "check-decagram",
  "ellipsis.message.fill": "message-processing",
  "clock.badge.exclamationmark": "clock-check-outline",
  "clock.badge.checkmark": "clock-alert-outline",
  "iphone.and.arrow.right.inward": "exit-to-app",
  "gear": "account-settings-outline",
  "questionmark.bubble": "help-box-outline",
  "text.document": "file-document-outline",
  "doc.text": "file-document-outline",
  "document": "file-outline",
  "doc": "file-outline",
  "questionmark.text.page": "frequently-asked-questions",
  "envelope": "face-agent",
  "star": "star-outline"
} as IconMapping;

export type IconSymbolHandle = { trigger: () => void };

export type IconSymbolProps = {
  ref?: Ref<IconSymbolHandle>;
  name: keyof typeof MAPPING;
  size?: number;
  color: string | OpaqueColorValue;
  colors?: SymbolViewProps["colors"];
  type?: SymbolViewProps["type"];
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
  animationSpec?: AnimationSpec;
};

export function IconSymbol({
  ref,
  name,
  size = ms(24),
  color,
  colors,
  type,
  style,
  weight,
  animationSpec
}: IconSymbolProps) {
  const [nonce, setNonce] = useState(0);
  const isIOS = Platform.OS === "ios";

  useImperativeHandle(ref, () => ({
    trigger: () => {
      if (isIOS && animationSpec) setNonce((n) => n + 1);
    }
  }), [animationSpec, isIOS]);

  if (isIOS) {
    return (
      <SymbolView
        key={animationSpec ? `anim-${nonce}` : "static"}
        name={name}
        size={size}
        tintColor={colors ? undefined : color as string}
        colors={colors}
        type={type}
        weight={weight}
        animationSpec={animationSpec}
        style={style}
      />
    );
  }

  return (
    <MaterialCommunityIcons
      color={color as string}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}