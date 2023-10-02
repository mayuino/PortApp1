import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth/react-native";
import React from "react";
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from "react-native";

export default function LogOutButton() {
  const navigation = useNavigation();
  const handlePress = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗しました");
      });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
  },
});
