import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionTitle from "./SectionTitle";

export default function SignUpBox() {
  const navigation = useNavigation();
  return (
    <View style={styles.sign_up_box}>
      <SectionTitle subtitle="SIGN UP">新規登録</SectionTitle>

      <View style={styles.input_box_frame}>
        <Text>姓</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>名</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>ログインID</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>パスワード</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>パスワード再入力</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>生年月日</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>入社予定日</Text>
        <View style={styles.input_box}>
          <TextInput />
        </View>
      </View>

      <TouchableOpacity
        style={styles.sign_up_button}
        onPress={() => {
          navigation.navigate("SignUpConfirm");
        }}
      >
        <Text style={styles.signup_btn_title}>登録</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sign_up_box: {
    width: "95%",
    height: 682,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 20,
  },
  sign_up_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 203,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    alignSelf: "center",
  },
  signup_btn_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  input_box: {
    width: 203,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 2,

    marginTop: 5,
    marginBottom: 16,
  },
  input_box_frame: {
    alignSelf: "center",
  },
  input_txt: {
    paddingVertical: 5,
  },
});
