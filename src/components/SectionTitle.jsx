import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function SectionTitle(props) {
  const { children, subtitle } = props;
  return (
    <View>
      <Text style={styles.detail_title}>{children}</Text>
      <Text style={styles.title_holizon}>--------------------</Text>
      <Text style={styles.detil_subtitle}>{subtitle}</Text>
    </View>
  );
}

SectionTitle.propTypes = {
  children: string.isRequired,
  subtitle: string.isRequired,
};

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
