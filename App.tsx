import React from "react";
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "./src/styles/theme";
import { AppStack } from "@src/routes/AppStack";
import { AuthStack } from "@src/routes/AuthStack";
import { ApplicationProvider, Spinner } from "@ui-kitten/components";

export default function App({}) {
  const auth = false;

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={COLORS}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        {auth ? <AppStack /> : <AuthStack />}
      </ApplicationProvider>
    </ThemeProvider>
  );
}
