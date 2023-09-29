import React from "react";
import { View, StyleSheet } from "react-native";
import AppFooter from "../components/AppFooter";
import RegistConfirmBox from "../components/RegistConfirmBox";

export default function SignUpConfirmScreen() {
  return (
    <View style={styles.container}>
      <RegistConfirmBox />
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
