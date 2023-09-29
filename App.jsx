import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import SectionListScreen from "./src/screens/SectionListScreen";
import PointDetailScreen from "./src/screens/PointDetailScreen";
import PointRequestScreen from "./src/screens/PointRequestScreen";
import PointUsedScreen from "./src/screens/PointUsedScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignUpConfirmScreen from "./src/screens/SignUpConfirmScreen";

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBg0BVDhw1MtcF_EYPEDyADgY2Y1rKMQ4U",
  authDomain: "portapp1-98347.firebaseapp.com",
  projectId: "portapp1-98347",
  storageBucket: "portapp1-98347.appspot.com",
  messagingSenderId: "1097754371330",
  appId: "1:1097754371330:web:7824351506f33ccc404e1b",
  measurementId: "G-K8H8PCQMFX",
};
const initalizeFirebase = () => {
  const app = initializeApp(firebaseConfig);

  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#A9EA3E" },
          headerTitleStyle: { color: "#ffffff" },
          headerTitle: "WORKERS",
          headerTintColor: "#ffffff",
          headerBackTitle: "Back",
          gestureDirection: "holizontal",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            gestureDirection: "vertical",
          }}
        />
        <Stack.Screen
          name="SignUpConfirm"
          component={SignUpConfirmScreen}
          options={{
            gestureDirection: "vertical",
          }}
        />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="PointDetail" component={PointDetailScreen} />
        <Stack.Screen name="PointRequest" component={PointRequestScreen} />
        <Stack.Screen name="PointUsed" component={PointUsedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
