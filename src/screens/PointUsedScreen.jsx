import React from "react";
import { View, StyleSheet } from "react-native";

import AppFooter from "../components/AppFooter";
import PointUsedMessageBox from "../components/PointUsedMessageBox";
import BackButton from "../components/BackButton";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";

export default function PointUsedScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PointUsedMessageBox />
      <BackButton
        onPress={() => {
          navigation.navigate("PointDetail");
        }}
      />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
