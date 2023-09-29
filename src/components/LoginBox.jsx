import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionTitle from "./SectionTitle";

export default function LoginBox() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.login_box}>
      <SectionTitle subtitle="LOG IN">ログイン</SectionTitle>
      <View style={styles.input_box_frame}>
        <Text>ID</Text>
        <View style={styles.input_box}>
          <TextInput
            style={styles.input_txt}
            autoFocus
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            autoCapitalize="none"
            textContentType="emailAddress"
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>パスワード</Text>
        <View style={styles.input_box}>
          <TextInput
            style={styles.input_txt}
            placeholder="PassWord"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            secureTextEntry
            textContentType="password"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.login_button}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "SectionList" }],
          });
        }}
      >
        <Text>ログイン</Text>
      </TouchableOpacity>
      <View style={styles.link_frame}>
        <Text>ユーザー登録がお済みでない方は</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "SignUp" }],
            });
          }}
        >
          <Text style={styles.link_txt}>こちら</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 12,
    marginBottom: 12,
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
    justifyContent: "center",

    marginTop: 5,
    marginBottom: 16,
  },
  input_box_frame: {
    alignSelf: "center",
  },
  input_txt: {

    paddingLeft: 10,
  },
  link_frame: {
    marginTop: 10,
    flexDirection: "row",
  },
  link_txt: {
    color: "#257EE5",
    fontWeight: "bold",
  },
});
