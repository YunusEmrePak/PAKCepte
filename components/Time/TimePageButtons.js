import { Pressable, StyleSheet, Text, View } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { stopActions } from "../../redux/stopSlice";

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
          <Text style={styles.sincanButtonText}>Sincan</Text>
        </View>
      </Pressable>
      <Pressable onPress={kayasHandler}>
        <View
          style={[
            styles.kayasButton,
            timesButtonName === "Kayas" && styles.active,
          ]}
        >
          <Text style={styles.kayasButtonText}>Kayaş</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: DEVICE_WIDTH / 1.5,
    height: DEVICE_HEIGHT / 20,
    borderRadius: 8,
  },
  sincanButton: {
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 3,
    height: DEVICE_HEIGHT / 20,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  sincanButtonText: {
    fontSize: 25,
  },
  kayasButton: {
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 3,
    height: DEVICE_HEIGHT / 20,
    height: DEVICE_HEIGHT / 20,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  kayasButtonText: {
    fontSize: 25,
  },
  active: {
    backgroundColor: "#EADFB4",
  },
});
