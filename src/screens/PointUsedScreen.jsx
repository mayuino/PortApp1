import React from "react";
import { View, StyleSheet } from "react-native";
import { shape, number } from "prop-types";

import AppFooter from "../components/AppFooter";
import PointUsedMessageBox from "../components/PointUsedMessageBox";

export default function PointUsedScreen(props) {
  const { route } = props;
  const { remain } = route.params;
  return (
    <View style={styles.container}>
      <PointUsedMessageBox remain={remain} />
      <AppFooter />
    </View>
  );
}

PointUsedScreen.propTypes = {
  route: shape({
    params: shape({ remain: number }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
