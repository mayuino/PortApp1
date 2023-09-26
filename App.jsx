import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.appbar}>
          <View style={styles.appbarInner}>
            <Text style={styles.appTitle}>WORKERS</Text>
            <Text style={styles.appSubTitle}>employee app</Text>
            <Text style={styles.appbarRight}>ログアウト</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.sectionList}>
          <View style={styles.sectionListItem}>
            <Text style={styles.sectionListItemTitle}>社員ポイント</Text>
            <Text style={styles.sectionListItemSubTitle}>
              CONTRIBUTION POINT
            </Text>
          </View>

          <View style={styles.sectionListItem}>
            <Text style={styles.sectionListItemTitle}>社員ポイント</Text>
            <Text style={styles.sectionListItemSubTitle}>
              CONTRIBUTION POINT
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.appFooter}>
        <View>
          <Text>bell</Text>
        </View>
        <View>
          <Text>mail</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
  },
  appbar: {
    width: "100%",
    height: 128,
    backgroundColor: "#A9EA3E",
    justifyContent: "flex-end",
  },
  appTitle: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
  },
  appSubTitle: {
    fontSize: 13,
    marginBottom: 8,
    color: "#ffffff",
  },
  appbarInner: {
    width: "100%",
    alignItems: "center",
  },
  appbarRight: {
    position: "absolute",
    right: 19,
    bottom: 8,
    color: "#ffffff",
  },
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
  appFooter: {
    width: "100%",
    height: "8%",
    backgroundColor: "#A9EA3E",
    paddingVertical: 20,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
