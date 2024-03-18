import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function SincanHours({ id }) {
  const times = useSelector((state) => state.stopRedux.timesSincan);

  return (
    <View style={styles.hourContainer}>
      <View style={styles.hours}>
        <Text style={styles.hoursText}>{id}</Text>
      </View>
      <View style={styles.minutes}>
        {times.map(
          (val) =>
            val.hour === id && (
              <View key={Math.random()} style={styles.minuteContainer}>
                <Text style={styles.minute}>{val.minute}</Text>
              </View>
            )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hourContainer: {
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 23,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bd9997",
    marginBottom: DEVICE_HEIGHT / 300,
  },
  hours: {
    width: DEVICE_WIDTH / 7,
    height: DEVICE_HEIGHT / 24,
    backgroundColor: "#bd9997",
    justifyContent: "center",
    alignItems: "center",
  },
  minutes: {
    width: DEVICE_WIDTH / 1.45,
    height: DEVICE_HEIGHT / 24,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: DEVICE_WIDTH / 50,
  },
  minuteContainer: {
    marginRight: DEVICE_WIDTH / 25,
  },
  minute: {},
});
