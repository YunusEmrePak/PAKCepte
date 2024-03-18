import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { stopActions } from "../../redux/stopSlice";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function TimePageButtons() {
  const dispatch = useDispatch();

  const timesButtonName = useSelector(
    (state) => state.stopRedux.timesButtonName
  );

  const sincanHandler = () => {
    dispatch(stopActions.setTimesButtonName("Sincan"));
  };

  const kayasHandler = () => {
    dispatch(stopActions.setTimesButtonName("Kayas"));
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={sincanHandler}>
        <View
          style={[
            styles.sincanButton,
            timesButtonName === "Sincan" && styles.active,
          ]}
        >
          <Text style={styles.buttonText}>Sincan Yönü</Text>
        </View>
      </Pressable>
      <Pressable onPress={kayasHandler}>
        <View
          style={[
            styles.kayasButton,
            timesButtonName === "Kayas" && styles.active,
          ]}
        >
          <Text style={styles.buttonText}>Kayaş Yönü</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 1.5,
    height: DEVICE_HEIGHT / 20,
    borderRadius: 8,
  },
  sincanButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: DEVICE_WIDTH / 2.75,
    height: DEVICE_HEIGHT / 20,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#48BDD9",
  },
  buttonText: {
    fontSize: DEVICE_WIDTH / 17,
    color: "white",
  },
  kayasButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: DEVICE_WIDTH / 2.75,
    height: DEVICE_HEIGHT / 20,
    height: DEVICE_HEIGHT / 20,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#48BDD9",
  },
  active: {
    backgroundColor: "#166DBB",
  },
  rightIcon: {
    width: DEVICE_WIDTH / 10,
    height: DEVICE_WIDTH / 10,
  },
  leftIcon: {
    width: DEVICE_WIDTH / 10,
    height: DEVICE_WIDTH / 10,
  },
});
