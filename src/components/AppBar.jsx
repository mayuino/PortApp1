import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appTitle}>WORKERS</Text>
        <Text style={styles.appSubTitle}>employee app</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: "100%",
    height: 128,
    backgroundColor: "#A9EA3E",
    justifyContent: "flex-end",
  },
  appTitle: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
  },
  appSubTitle: {
    fontSize: 13,
    marginBottom: 8,
    color: "#ffffff",
  },
  appbarInner: {
    width: "100%",
    alignItems: "center",
  },
  appbarRight: {
    position: "absolute",
    right: 19,
    bottom: 8,
    color: "#ffffff",
  },
});
