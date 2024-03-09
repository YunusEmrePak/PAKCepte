import { Image, StyleSheet, Text, View } from "react-native";

import leftArrow from "../../assets/leftArrow.png";

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
    padding: 0,
    width: 420,
    height: 300,
  },
  directionContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 65,
    backgroundColor: "#FF5757",
    borderRadius: 12,
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
    borderRadius: 8,
    marginTop: 32,
    // marginBottom: 130,
  },
  time: {
    fontSize: 30,
    fontWeight: "700",
  },
  leftIcon: {
    width: 50,
    height: 50,
  },
});
