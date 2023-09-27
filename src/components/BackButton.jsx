import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BackButton() {
  return (
    <View style={styles.back_button}>
      <Text style={styles.back_title}>もどる</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 181,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -190,
    alignSelf: "center",
  },
  back_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
