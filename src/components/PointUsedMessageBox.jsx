import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SectionTitle from "./SectionTitle";

export default function PointUsedMessageBox() {
  return (
    <View style={styles.point_request_box}>
      <SectionTitle subtitle="CONTRIBUTION POINT">社員ポイント</SectionTitle>
      <Text style={styles.point_used_message}>
        ポイントの利用申請が完了しました。
      </Text>
      <View style={styles.remain_point_frame}>
        <Text style={styles.remain_point_title}>現在のポイント残高</Text>
        <Text style={styles.remain_point}>10Pt</Text>
      </View>
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
  },
  point_used_message: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 30,
    alignSelf: "center",
  },
  remain_point_frame: {
    flexDirection: "row",
    marginTop: 73,
    alignSelf: "flex-end",
  },
  remain_point_title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
  remain_point: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 32,
  },
});
