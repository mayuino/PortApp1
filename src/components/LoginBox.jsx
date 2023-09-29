import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import SectionTitle from "./SectionTitle";

export default function LoginBox() {
  return (
    <View style={styles.login_box}>
      <SectionTitle subtitle="LOG IN">ログイン</SectionTitle>
      <View style={styles.input_box_frame}>
        <Text>ID</Text>
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

      <TouchableOpacity style={styles.login_button}>
        <Text>ログイン</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login_box: {
    width: "95%",
    height: 335,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 20,
  },
  login_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 203,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    alignSelf: "center",
  },
  login_button_title: {
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
