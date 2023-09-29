import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RequestButton from "./RequestButton";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";

export default function PointConfirmBox() {
  const navigation = useNavigation();
  return (
    <View style={styles.point_request_box}>
      <Text style={styles.confirm_message}>この内容で申請しますか。</Text>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>利用ポイント</Text>
        <Text style={styles.confirm_data}>60Pt</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>受取額</Text>
        <Text style={styles.confirm_data}>7000円</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>給与反映月</Text>
        <Text style={styles.confirm_data}>○月分給与</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>ポイント残高</Text>
        <Text style={styles.confirm_data}>10Pt</Text>
      </View>
      <RequestButton
        onPress={() => {
          navigation.navigate("PointUsed");
        }}
      >
        申請する
      </RequestButton>
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
  confirm_message: {
    marginBottom: 30,
    fontSize: 18,
    color: "#ffffff",
  },
  confirm_line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 172,
    marginVertical: 5,
  },
  confirm_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  confirm_data: {
    fontSize: 12,
  },
});
