import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { func } from "prop-types";

export default function BackButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.back_button} onPress={onPress}>
      <Text style={styles.back_title}>もどる</Text>
    </TouchableOpacity>
  );
}

BackButton.propTypes = {
  onPress: func,
};

BackButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  back_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 181,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -140,
    alignSelf: "center",
  },
  back_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
