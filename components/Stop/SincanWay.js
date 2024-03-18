import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import rightArrow from "../../assets/rightArrow.png";

import { stopActions } from "../../redux/stopSlice";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import { calculateRemainingTime } from "../../utils/calculateRemainingTime";

const jsonTimes = require("../../times.json");

export default function SincanWay() {
  const dispatch = useDispatch();

  const times = useSelector((state) => state.stopRedux.timesSincan);
  const remainingTimeSincan = useSelector(
    (state) => state.stopRedux.remainingTimeSincan
  );
  const stopId = useSelector((state) => state.stopRedux.stopId);
  const stopName = useSelector((state) => state.stopRedux.stopName);

  useEffect(() => {
    if (stopId > 0) {
      dispatch(
        stopActions.setTimesSincan(jsonTimes[stopId - 1].timeListSincan)
      );
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const minutesSincan = calculateRemainingTime(times);
      dispatch(stopActions.setRemainingTimeSincan(minutesSincan));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [times]);

  return (
    <View style={styles.sincanContainer}>
      <View style={styles.directionContainer}>
        <Text style={styles.directionName}>Sincan Yönü</Text>
      </View>
      {stopName === "Sincan" ? (
        <View style={styles.timeContainer}>
          <Text style={styles.rightNow}>Şuan buradasınız.</Text>
        </View>
      ) : (
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {remainingTimeSincan} {remainingTimeSincan !== "Geldi" && "Dakika"}{" "}
          </Text>
          <Image source={rightArrow} style={styles.rightIcon} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sincanContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 3,
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
  },
  directionContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 12,
    backgroundColor: "#0097B2",
    borderRadius: 12,
  },
  directionName: {
    fontSize: DEVICE_WIDTH / 14,
    color: "#fff",
    fontWeight: "800",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: DEVICE_WIDTH / 1.06,
    height: DEVICE_HEIGHT / 12,
    backgroundColor: "#8FFAC7",
    borderRadius: 12,
    marginTop: "8%",
  },
  time: {
    fontSize: DEVICE_WIDTH / 14,
    fontWeight: "700",
  },
  rightIcon: {
    width: DEVICE_WIDTH / 8,
    height: DEVICE_WIDTH / 8,
  },
  rightNow: {
    fontSize: DEVICE_WIDTH / 14,
    fontWeight: "700",
  },
});
