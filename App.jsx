import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SectionListScreen from "./src/screens/SectionListScreen";
import PointDetailScreen from "./src/screens/PointDetailScreen";
import PointRequestScreen from "./src/screens/PointRequestScreen";
import PointUsedScreen from "./src/screens/PointUsedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SectionList"
        screenOptions={{
          headerStyle: { backgroundColor: "#A9EA3E" },
          headerTitleStyle: { color: "#ffffff" },
          headerTitle: "WORKERS",
          headerTintColor: "#ffffff",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="PointDetail" component={PointDetailScreen} />
        <Stack.Screen name="PointRequest" component={PointRequestScreen} />
        <Stack.Screen name="PointUsed" component={PointUsedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
