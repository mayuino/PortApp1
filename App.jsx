import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

import SectionListScreen from "./src/screens/SectionListScreen";
import PointDetailScreen from "./src/screens/PointDetailScreen";
import PointRequestScreen from "./src/screens/PointRequestScreen";
import PointUsedScreen from "./src/screens/PointUsedScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignUpConfirmScreen from "./src/screens/SignUpConfirmScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUpConfirm"
        screenOptions={{
          headerStyle: { backgroundColor: "#A9EA3E" },
          headerTitleStyle: { color: "#ffffff" },
          headerTitle: "WORKERS",
          headerTintColor: "#ffffff",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpConfirm" component={SignUpConfirmScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="PointDetail" component={PointDetailScreen} />
        <Stack.Screen name="PointRequest" component={PointRequestScreen} />
        <Stack.Screen name="PointUsed" component={PointUsedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
