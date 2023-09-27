import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UsablePoint() {
  return (
    <View>
      <View style={styles.usable_point_frame}>
        <Text style={styles.usable_point_title}>利用可能ポイント</Text>
        <View style={styles.point_box}>
          <Text style={styles.point}>70</Text>
        </View>
        <Text style={styles.point_sufix}>Pt</Text>
      </View>

      <View style={styles.use_point_button}>
        <Text style={styles.use_point_button_title}>ポイントを使う</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  usable_point_frame: {
    flexDirection: "row",
    height: 25,
    justifyContent: "center",
    marginBottom: 16,
  },
  usable_point_title: {
    color: "#ffffff",
    fontSize: 11,
    paddingTop: 6,
    paddingRight: 15,
  },
  point_box: {
    width: 143,
    height: 25,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    alignItems: "flex-end",
  },
  point_sufix: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 7,
  },
  point: {
    paddingTop: 5,
    paddingRight: 5,
  },
  use_point_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 141,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 144,
    marginBottom: 85,
  },
  use_point_button_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
