import { Image, StyleSheet, Text, View } from "react-native";

import rightArrow from "../../assets/rightArrow.png";

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
    padding: 0,
    width: 420,
    height: 300,
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
  },
  directionContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 65,
    backgroundColor: "#0097B2",
    borderRadius: 8,
    // marginTop: 16,
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
    width: 390,
    height: 65,
    backgroundColor: "#8FFAC7",
    borderRadius: 12,
    marginTop: 32,
    // marginBottom: 80,
  },
  time: {
    fontSize: 30,
    fontWeight: "700",
  },
  rightIcon: {
    width: 50,
    height: 50,
  },
});
