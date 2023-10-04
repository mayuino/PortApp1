import React from "react";
import { View, Text, StyleSheet } from "react-native";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";
import { number, string } from "prop-types";
import RequestButton from "./RequestButton";

export default function PointConfirmBox(props) {
  const navigation = useNavigation();
  const {
    usepoint, fee, remain, month,
  } = props;

  return (
    <View style={styles.point_request_box}>
      <Text style={styles.confirm_message}>この内容で申請しますか。</Text>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>利用ポイント</Text>
        <Text style={styles.confirm_data}>{`${usepoint}Pt`}</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>受取額</Text>
        <Text style={styles.confirm_data}>{`${fee}円`}</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>給与反映月</Text>
        <Text style={styles.confirm_data}>{`${month}月分給与`}</Text>
      </View>
      <View style={styles.confirm_line}>
        <Text style={styles.confirm_title}>ポイント残高</Text>
        <Text style={styles.confirm_data}>{`${remain}Pt`}</Text>
      </View>
      <RequestButton
        onPress={() => {
          navigation.navigate("PointUsed", { remain });
        }}
      >
        申請する
      </RequestButton>
    </View>
  );
}

PointConfirmBox.propTypes = {
  usepoint: number.isRequired,
  fee: string.isRequired,
  remain: number.isRequired,
  month: number.isRequired,
};

const styles = StyleSheet.create({
  point_request_box: {
    height: 246,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginTop: 20,
  },
  confirm_message: {
    marginBottom: 30,
    fontSize: 18,
    color: "#ffffff",
  },
  confirm_line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 132,
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
