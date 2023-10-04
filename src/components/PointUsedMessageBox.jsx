import React from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { number } from "prop-types";
import SectionTitle from "./SectionTitle";

export default function PointUsedMessageBox(props) {
  const { remain } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.point_used_box}>
      <SectionTitle subtitle="CONTRIBUTION POINT">社員ポイント</SectionTitle>
      <Text style={styles.point_used_message}>
        ポイントの利用申請が完了しました。
      </Text>
      <View style={styles.remain_point_frame}>
        <Text style={styles.remain_point_title}>現在のポイント残高</Text>
        <Text style={styles.remain_point}>{`${remain}Pt`}</Text>
      </View>
      <View style={styles.btn_frame}>
        <TouchableOpacity
          style={styles.back_button}
          onPress={() => {
            navigation.navigate("PointDetail");
          }}
        >
          <Text style={styles.back_title}>もどる</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

PointUsedMessageBox.propTypes = {
  remain: number.isRequired,
};

const styles = StyleSheet.create({
  point_used_box: {
    width: "95%",
    height: 306,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginTop: 20,
    justifyContent: "center",
  },
  point_used_message: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 30,
    alignSelf: "center",
  },
  remain_point_frame: {
    flexDirection: "row",
    marginTop: 53,
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
  btn_frame: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  back_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 178,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  back_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
