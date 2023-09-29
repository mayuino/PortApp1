import React from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
} from "react-native";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";
import SectionTitle from "./SectionTitle";

export default function RegistConfirmBox() {
  const navigation = useNavigation();
  return (
    <View style={styles.regist_confirm_box}>
      <SectionTitle subtitle="REGIST CONFIRM">登録確認</SectionTitle>
      <View style={styles.confirm_data_frame}>
        <View style={styles.confirm_titles}>
          <Text style={styles.data_txt}>お名前:</Text>
          <Text style={styles.data_txt}>ログインID:</Text>
          <Text style={styles.data_txt}>パスワード:</Text>
          <Text style={styles.data_txt}>生年月日:</Text>
          <Text style={styles.data_txt}>入社予定日:</Text>
        </View>
        <View>
          <Text style={styles.data_txt}>テスト太郎</Text>
          <Text style={styles.data_txt}>worker@emp.com</Text>
          <Text style={styles.data_txt}>123asdfg</Text>
          <Text style={styles.data_txt}>1995年2月3日</Text>
          <Text style={styles.data_txt}>2023年9月1日</Text>
        </View>
      </View>
      <View style={styles.btn_frame}>
        <TouchableOpacity
          style={styles.fix_btn}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.btn_txt}>修正</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.regist_btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.btn_txt}>登録</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  regist_confirm_box: {
    width: "95%",
    backgroundColor: "rgba(165,165,165,0.6)",
    height: 314,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 20,
  },
  confirm_data_frame: {
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "center",
  },
  confirm_titles: {
    alignItems: "flex-end",
    marginRight: 15,
  },
  confirm_datas: {
    alignItems: "flex-start",
  },
  data_txt: {
    marginVertical: 5,
  },
  btn_frame: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
  },
  fix_btn: {
    width: 136,
    height: 28,
    backgroundColor: "rgba(244,97,97,1)",
    marginRight: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  regist_btn: {
    width: 136,
    height: 28,
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_txt: {
    color: "#ffffff",
  },
});
