import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    inter: require("../assets/fonts/Inter-Regular.ttf"),
    "inter-semi-bold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "inter-bold": require("../assets/fonts/Inter-Bold.ttf"),
    "inter-thin": require("../assets/fonts/Inter-Thin.ttf"),
    "inter-black": require("../assets/fonts/Inter-Black.ttf"),
    "inter-light": require("../assets/fonts/Inter-Light.ttf"),
    "inter-extra-light": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "inter-medium": require("../assets/fonts/Inter-Medium.ttf"),
    "inter-extra-bold": require("../assets/fonts/Inter-ExtraBold.ttf"),
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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
