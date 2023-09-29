import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AppFooter() {
  return (
    <View style={styles.appFooter}>
      <View>
        <Feather name="bell" size={28} color="white" />
      </View>
      <View>
        <Feather name="mail" size={28} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appFooter: {
    width: "100%",
    height: "8%",
    backgroundColor: "#A9EA3E",
    paddingTop: 10,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
