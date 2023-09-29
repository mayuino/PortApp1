import React from "react";
import { View, StyleSheet } from "react-native";

import AppFooter from "../components/AppFooter";
import LoginBox from "../components/LoginBox";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginBox />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
