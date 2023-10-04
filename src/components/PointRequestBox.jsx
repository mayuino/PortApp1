import React, { useState } from "react";
import {
  View, Text, StyleSheet, TextInput, Alert,
} from "react-native";
import PropTypes from "prop-types";
import { getAuth } from "firebase/auth/react-native";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import SectionTitle from "./SectionTitle";
import RequestButton from "./RequestButton";
import PointConfirmBox from "./PointConfirmBox";

export default function PointRequestBox(props) {
  const { usablepoint } = props;
  const [usepoint, setUsepoint] = useState(0);
  const [isUsepoint, setIsusepoint] = useState(false);
  const [fee, setFee] = useState(0);
  const [remainpoint, setRemainpoint] = useState(0);
  const [month, setMonth] = useState(0);

  const auth = getAuth();

  const handlePress = async () => {
    if (usepoint === 0) {
      Alert.alert("10Pt単位で数字を入力してください。");
    } else if (checkPoint(usepoint) !== 0) {
      Alert.alert("ポイントは10ポイント単位で利用できます。");
    } else {
      const db = getFirestore();
      await addDoc(collection(db, `users/${auth.currentUser.uid}/points`), {
        point: usepoint,
        use_objective: "利用申請",
        updatedAt: new Date(),
      })
        .then((docRef) => {
          console.log("Created", docRef.id);
          setIsusepoint(true);
          setFee(exchangePoint(usepoint));
          calcRemainpoint();
          calcMonth();
        })
        .catch((error) => {
          console.log("Error!", error);
        });
    }
  };
  const checkPoint = (point) => {
    const ans = point % 10;
    return ans;
  };

  const exchangePoint = (nowUsePoint) => {
    let point200Fee = 0;
    let point100Fee = 0;
    let point50Fee = 0;
    let point10Fee = 0;

    let restUsepoint = nowUsePoint;
    // 200ポイント単位の金額を確認する
    if (restUsepoint >= 200) {
      const point200Change = Math.floor(usepoint / 200);
      point200Fee = point200Change * 50000;
      restUsepoint = nowUsePoint - point200Change * 200;
    }
    // 100ポイント単位の金額を確認する
    if (restUsepoint >= 100) {
      const point100Change = Math.floor(restUsepoint / 100);
      point100Fee = point100Change * 23000;
      restUsepoint -= (point100Change * 100);
    }
    // 50ポイント単位の金額を確認する
    if (restUsepoint >= 50) {
      const point50Change = Math.floor(restUsepoint / 50);
      point50Fee = point50Change * 11000;
      restUsepoint -= (point50Change * 50);
    }
    // 10ポイント単位の金額を確認する
    if (restUsepoint >= 10) {
      const point10Change = Math.floor(restUsepoint / 10);
      point10Fee = point10Change * 2000;
      restUsepoint -= (point10Change * 10);
    }

    return point200Fee + point100Fee + point50Fee + point10Fee;
  };

  const calcRemainpoint = () => {
    const remain = usablepoint - usepoint;
    setRemainpoint(remain);
  };

  const calcMonth = () => {
    const d = new Date();
    const nowMonth = d.getMonth();
    const refMonth = nowMonth + 2;
    setMonth(refMonth);
  };

  return (
    <View>
      <View style={styles.point_request_box}>
        <SectionTitle subtitle="CONTRIBUTION POINT">社員ポイント</SectionTitle>
        <View style={styles.usable_point_frame}>
          <Text style={styles.usable_point_title}>利用可能ポイント</Text>
          <View style={styles.point_box}>
            <Text style={styles.point}>{usablepoint}</Text>
          </View>
          <Text style={styles.point_sufix}>Pt</Text>
        </View>

        <View style={styles.usable_point_frame}>
          <Text style={styles.usable_point_title}>利用ポイント</Text>
          <View style={styles.point_box}>
            <TextInput
              style={styles.pointInput}
              value={usepoint}
              onChangeText={(text) => {
                setUsepoint(text);
              }}
              keyboardType="number-pad"
              autoFocus
            />
          </View>
          <Text style={styles.point_sufix}>Pt</Text>
        </View>
        <RequestButton onPress={handlePress}>申請する</RequestButton>
      </View>

      {isUsepoint ? (
        <PointConfirmBox
          usepoint={usepoint}
          fee={fee}
          remain={remainpoint}
          month={month}
        />
      ) : (
        ""
      )}
    </View>
  );
}

PointRequestBox.propTypes = {
  usablepoint: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  point_request_box: {
    height: 246,
    backgroundColor: "rgba(165,165,165,0.6)",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 20,
  },
  usable_point_frame: {
    flexDirection: "row",
    height: 25,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  usable_point_title: {
    color: "#ffffff",
    fontSize: 11,
    paddingTop: 6,
    paddingRight: 15,
  },
  point_box: {
    width: 143,
    height: 25,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  point_sufix: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 7,
  },
  point: {
    paddingTop: 5,
    paddingRight: 5,
    flex: 1,
  },
  pointInput: {
    paddingRight: 5,
    flex: 1,
  },
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
