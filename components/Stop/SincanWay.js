import { Image, StyleSheet, Text, View } from "react-native";

import rightArrow from "../../assets/rightArrow.png";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function SincanWay() {
  return (
    <View style={styles.sincanContainer}>
      <View style={styles.directionContainer}>
        <Text style={styles.directionName}>Sincan Yönü</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>12 Dakika</Text>
        <Image source={rightArrow} style={styles.rightIcon} />
      </View>
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
    fontSize: 30,
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
    fontSize: 30,
    fontWeight: "700",
  },
  rightIcon: {
    width: DEVICE_WIDTH / 8,
    height: DEVICE_WIDTH / 8,
  },
});
