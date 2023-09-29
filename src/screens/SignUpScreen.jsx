import React from "react";
import { View, StyleSheet } from "react-native";

import SignUpBox from "../components/SignUpBox";
import AppFooter from "../components/AppFooter";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUpBox />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
