import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionTitle() {
  return (
    <View>
      <Text style={styles.detail_title}>社員ポイント</Text>
      <Text style={styles.title_holizon}>--------------------</Text>
      <Text style={styles.detil_subtitle}>CONTRIBUTION POINT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detail_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  title_holizon: {
    color: "#ffffff",
    lineHeight: 12,
  },
  detil_subtitle: {
    color: "#ffffff",
    lineHeight: 11,
    fontSize: 12,
    marginBottom: 24,
  },
});
