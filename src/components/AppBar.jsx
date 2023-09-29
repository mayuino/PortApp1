import React from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
} from "react-native";
import { bool, func } from "prop-types";

export default function AppBar(props) {
  const { mTxt, onPress } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appTitle}>WORKERS</Text>
        <Text style={styles.appSubTitle}>employee app</Text>
        <TouchableOpacity style={styles.appbarRightPosition} onPress={onPress}>
          <Text style={styles.appbarRightText}>ログアウト</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appbarLeftPosition} onPress={onPress}>
          <Text style={styles.appbarLeftText}>{`${mTxt ? "もどる" : ""}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

AppBar.propTypes = {
  mTxt: bool,
  onPress: func,
};

AppBar.defaultProps = {
  mTxt: false,
  onPress: null,
};

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
  appbarRightText: {
    color: "#ffffff",
  },
  appbarRightPosition: {
    position: "absolute",
    right: 19,
    bottom: 8,
  },
  appbarLeftText: {
    color: "#ffffff",
  },
  appbarLeftPosition: {
    position: "absolute",
    left: 24,
    bottom: 8,
  },
});
