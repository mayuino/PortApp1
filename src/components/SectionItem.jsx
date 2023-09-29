import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";

export default function SectionItem(props) {
  const { children, subtitle, onPress } = props;
  return (
    <TouchableOpacity style={styles.sectionListItem} onPress={onPress}>
      <Text style={styles.sectionListItemTitle}>{children}</Text>
      <Text style={styles.sectionListItemLine}>--------------------</Text>
      <Text style={styles.sectionListItemSubTitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

SectionItem.propTypes = {
  children: string.isRequired,
  subtitle: string.isRequired,
  onPress: func,
};

SectionItem.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
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
  sectionListItemLine: {
    color: "#ffffff",
    position: "absolute",
    top: 52,
    left: 206,
  },
});
