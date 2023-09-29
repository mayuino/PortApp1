import React from "react";
import {
  View, Text, StyleSheet, TextInput,
} from "react-native";
import SectionTitle from "./SectionTitle";
import RequestButton from "./RequestButton";

export default function PointRequestBox() {
  return (
    <View style={styles.point_request_box}>
      <SectionTitle />
      <View style={styles.usable_point_frame}>
        <Text style={styles.usable_point_title}>利用可能ポイント</Text>
        <View style={styles.point_box}>
          <Text style={styles.point}>70</Text>
        </View>
        <Text style={styles.point_sufix}>Pt</Text>
      </View>

      <View style={styles.usable_point_frame}>
        <Text style={styles.usable_point_title}>利用ポイント</Text>
        <View style={styles.point_box}>
          <TextInput style={styles.pointInput} value="" keyboardType="number-pad" autoFocus />
        </View>
        <Text style={styles.point_sufix}>Pt</Text>
      </View>
      <RequestButton>申請する</RequestButton>
    </View>
  );
}

const styles = StyleSheet.create({
  point_request_box: {
    width: "95%",
    height: 246,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 20,
  },
  usable_point_frame: {
    flexDirection: "row",
    height: 25,
    justifyContent: "flex-end",
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
    flex: 1,
  },
  pointInput: {
    paddingTop: 5,
    paddingRight: 5,
    flex: 1,
    textAlignVertical: "auto",
  },
  use_point_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 161,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    alignSelf: "center",
  },
  use_point_button_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
