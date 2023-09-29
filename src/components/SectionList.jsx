import React from "react";
import { View, StyleSheet } from "react-native";
import SectionItem from "./SectionItem";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";

export default function SectionList() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.sectionList}>
        <SectionItem subtitle="NEWS">最新のニュース</SectionItem>
        <SectionItem
          subtitle="CONTRIBUTION POINT"
          onPress={() => {
            navigation.navigate("PointDetail");
          }}
        >
          社員ポイント
        </SectionItem>
        <SectionItem subtitle="QUESTIONAIR">アンケート</SectionItem>
        <SectionItem subtitle="REQUEST HOLIDAY">有給申請</SectionItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    height: "75%",
    justifyContent: "flex-start",
  },
});
