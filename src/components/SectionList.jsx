import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionList() {
  return (
    <View>
      <View style={styles.sectionList}>
        <View style={styles.sectionListItem}>
          <Text style={styles.sectionListItemTitle}>社員ポイント</Text>
          <Text style={styles.sectionListItemSubTitle}>CONTRIBUTION POINT</Text>
        </View>

        <View style={styles.sectionListItem}>
          <Text style={styles.sectionListItemTitle}>社員ポイント</Text>
          <Text style={styles.sectionListItemSubTitle}>CONTRIBUTION POINT</Text>
        </View>
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
  sectionListItem: {
    marginTop: 16,
    width: "95%",
    height: 91,
    backgroundColor: "rgba(165,165,165,0.7)",
    borderRadius: 10,
    elevation: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  sectionListItemTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    top: 38,
    left: 206,
  },
  sectionListItemSubTitle: {
    color: "#ffffff",
    fontSize: 12,
    position: "absolute",
    bottom: 13,
    left: 206,
  },
});
