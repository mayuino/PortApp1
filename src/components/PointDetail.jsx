import React from "react";
import {
  View, Text, StyleSheet, ScrollView,
} from "react-native";
import {
  shape, string, instanceOf, arrayOf, number,
} from "prop-types";

export default function PointDetail(props) {
  const { points } = props;

  return (
    <View style={styles.point_detail_frame}>
      <View>
        <View style={styles.point_get_detail_titlebar}>
          <Text>ポイント取得明細</Text>
        </View>
        <View style={styles.point_frame}>
          <Text style={styles.point_title} numberOfLines={1}>○月分皆勤賞</Text>
          <Text style={styles.point_detail}>５pt</Text>
          <Text style={styles.point_date}>2023/8/31</Text>
        </View>

        <View style={styles.point_frame}>
          <Text style={styles.point_title}>○月分皆勤賞</Text>
          <Text style={styles.point_detail}>５pt</Text>
          <Text style={styles.point_date}>2023/8/31</Text>
        </View>

        <View style={styles.point_frame}>
          <Text style={styles.point_title}>○月分皆勤賞</Text>
          <Text style={styles.point_detail}>５pt</Text>
          <Text style={styles.point_date}>2023/8/31</Text>
        </View>
      </View>

      <View>
        <View style={styles.point_use_detail_titlebar}>
          <Text>ポイント利用明細</Text>
        </View>
        <ScrollView>
          {points.map((point) => (
            <View key={point.id} style={styles.point_frame}>
              <Text style={styles.point_title} numberOfLines={1}>{point.use_objective}</Text>
              <Text style={styles.point_detail}>{`${point.point}pt`}</Text>
              <Text style={styles.point_date}>{String(point.updatedAt)}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

PointDetail.propTypes = {
  points: arrayOf(
    shape({
      point: number,
      user_objective: string,
      updatedAt: instanceOf(Date),
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  point_detail_frame: {
    width: "100%",
    alignItems: "center",
  },
  point_get_detail_titlebar: {
    backgroundColor: "#89C05D",
    width: 309,
    height: 17,
    paddingLeft: 14,
  },
  point_frame: {
    backgroundColor: "#ffffff",
    width: 309,
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.56)",
  },
  point_title: {
    fontSize: 11,
  },
  point_detail: {
    fontSize: 11,
    marginLeft: 22,
    marginRight: 22,
  },
  point_date: {
    fontSize: 10,
    marginRight: 18,
    color: "rgba(0,0,0,0.56)",
  },
  point_use_detail_titlebar: {
    backgroundColor: "#C05D5D",
    width: 309,
    height: 17,
    marginTop: 51,
    paddingLeft: 14,
  },
});
