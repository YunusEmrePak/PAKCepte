import { Image, StyleSheet, Text, View } from "react-native";

import leftArrow from "../../assets/leftArrow.png";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function KayasWay() {
  return (
    <View style={styles.kayasContainer}>
      <View style={styles.directionContainer}>
        <Text style={styles.directionName}>Kayaş Yönü</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>6 Dakika</Text>
        <Image source={leftArrow} style={styles.leftIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    kayasContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 3,
  },
  directionContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 12,
    backgroundColor: "#FF5757",
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
  leftIcon: {
    width: DEVICE_WIDTH / 8,
    height: DEVICE_WIDTH / 8,
  },
});
