import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import AppFooter from "../components/AppFooter";

import SectionList from "../components/SectionList";
import LogOutButton from "../components/LogOutButton";

export default function SectionListScreen(props) {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <SectionList />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
  },
});
