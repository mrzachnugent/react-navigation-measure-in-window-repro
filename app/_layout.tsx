import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

const IS_TRANSPARENT_HEADER = false;
// const IS_TRANSPARENT_HEADER = true;

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTransparent: IS_TRANSPARENT_HEADER }}
        />
      </Stack>
    </ThemeProvider>
  );
}
