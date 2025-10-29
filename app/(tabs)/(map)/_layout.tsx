import { ThemedText } from "@/components/Themed";

import React from "react";
import {Stack} from "expo-router";

export default function MapLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Oslo Campus" }}/>
    </Stack>
  );
}