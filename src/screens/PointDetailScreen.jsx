import React, { useEffect, useState } from "react";
import {
  View, StyleSheet, ScrollView, Alert,
} from "react-native";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth/react-native";

import AppFooter from "../components/AppFooter";
import SectionTitle from "../components/SectionTitle";
import UsablePoint from "../components/UsablePoint";
import PointDetail from "../components/PointDetail";
// eslint-disable-next-line import/order
import { useNavigation } from "@react-navigation/native";

export default function PointDetailScreen() {
  const navigation = useNavigation();
  const [points, setPoints] = useState([]);
  const [totalpoint, setTotalpoint] = useState([]);
  const [usablepoint, setUsablepoint] = useState("");

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    let unsubscribe = () => {};
    if (auth.currentUser) {
      const q = query(
        collection(db, `users/${auth.currentUser.uid}/points`),
        orderBy("updatedAt", "desc"),
      );

      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userPoints = [];
        const totalPoint = [];
        querySnapshot.forEach(
          (doc) => {
            console.log(doc.id, doc.data());
            const data = doc.data();
            userPoints.push({
              id: doc.id,
              point: data.point,
              use_objective: data.use_objective,
              updateAt: data.updateAt,
            });
            totalPoint.push({
              point: data.point,
            });
          },
          (error) => {
            console.log(error);
            Alert.alert("データの取得に失敗しました");
          },
        );
        setPoints(userPoints);
        const total = totalPoint.reduce(
          (sum, element) => sum + Number(element.point),
          0,
        );
        setTotalpoint(total);
      });
    }
    return unsubscribe;
  }, []);

  useEffect(() => {
    setUsablepoint("200");
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.point_detail_box}>
        <SectionTitle subtitle="CONTRIBUTION POINT">社員ポイント</SectionTitle>
        <UsablePoint
          onPress={() => {
            navigation.navigate("PointRequest", { up: usablepoint });
          }}
          usablepoint={usablepoint}
        />
        <PointDetail points={points} usedpoints={totalpoint} />
      </ScrollView>
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  point_detail_box: {
    width: "90%",
    height: "75%",
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
});
