import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { shape, string } from "prop-types";
import AppFooter from "../components/AppFooter";
import PointRequestBox from "../components/PointRequestBox";

export default function PointRequestScreen(props) {
  const { route } = props;
  const { up } = route.params;
  const { isPoint, setIspoint } = useState(false);

  return (
    <View style={styles.container}>
      <PointRequestBox
        onPress={() => {
          setIspoint(!isPoint);
        }}
        usablepoint={up}
      />

      <AppFooter />
    </View>
  );
}

PointRequestScreen.propTypes = {
  route: shape({
    params: shape({ up: string }),
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
