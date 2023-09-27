import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AppFooter() {
  return (
    <View style={styles.appFooter}>
      <View>
        <Text>bell</Text>
      </View>
      <View>
        <Text>mail</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appFooter: {
    width: "100%",
    height: "8%",
    backgroundColor: "#A9EA3E",
    paddingVertical: 20,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
