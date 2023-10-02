import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth/react-native";
import SectionTitle from "./SectionTitle";

export default function SignUpBox() {
  const navigation = useNavigation();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [birth, setBirth] = useState("");
  const [enterday, setEnterday] = useState("");

  const handlePress = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, id, password).then(
        (userCredential) => {
          console.log(userCredential.user.uid);
          navigation.reset({
            index: 0,
            routes: [{ name: "SectionList" }],
          });
        },
      );
    } catch (error) {
      console.log(error.code, error.message);
      Alert.alert(error.code);
    }
  };
  return (
    <View style={styles.sign_up_box}>
      <SectionTitle subtitle="SIGN UP">新規登録</SectionTitle>

      <View style={styles.input_box_frame}>
        <Text>姓</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="姓"
            value={lastname}
            onChangeText={(text) => {
              setLastname(text);
            }}
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>名</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="名"
            value={firstname}
            onChangeText={(text) => {
              setFirstname(text);
            }}
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>ログインID</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="ログインID"
            value={id}
            onChangeText={(text) => {
              setId(text);
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
            placeholder="パスワード"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            autoCapitalize="none"
            textContentType="newPassword"
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>パスワード再入力</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="パスワード"
            value={repassword}
            onChangeText={(text) => {
              setRepassword(text);
            }}
            autoCapitalize="none"
            textContentType="password"
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>生年月日</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="2000年1月2日"
            value={birth}
            onChangeText={(text) => {
              setBirth(text);
            }}
          />
        </View>
      </View>

      <View style={styles.input_box_frame}>
        <Text>入社予定日</Text>
        <View style={styles.input_box}>
          <TextInput
            placeholder="2023年3月2日"
            value={enterday}
            onChangeText={(text) => {
              setEnterday(text);
            }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.sign_up_button} onPress={handlePress}>
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
    justifyContent: "center",
    paddingLeft: 10,
  },
  input_box_frame: {
    alignSelf: "center",
  },
  input_txt: {
    paddingVertical: 5,
  },
});
