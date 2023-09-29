import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { func, string } from "prop-types";

export default function RequestButton(props) {
  const { onPress, children } = props;
  return (
    <TouchableOpacity style={styles.use_point_button} onPress={onPress}>
      <Text style={styles.use_point_button_title}>{children}</Text>
    </TouchableOpacity>
  );
}

RequestButton.propTypes = {
  onPress: func,
  children: string.isRequired,
};

RequestButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  use_point_button: {
    backgroundColor: "#A9EA3E",
    borderRadius: 5,
    width: 161,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    alignSelf: "center",
  },
  use_point_button_title: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
