import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { stopActions } from "../../redux/stopSlice";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

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
          <Image source={rightArrow} style={styles.rightIcon} />
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
        <Image source={leftArrow} style={styles.leftIcon} />
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
    borderColor: "black",
    borderWidth: 1,
  },
  sincanButtonText: {
    fontSize: 25,
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
    borderColor: "black",
    borderWidth: 1,
  },
  kayasButtonText: {
    fontSize: 25,
  },
  active: {
    backgroundColor: "#EADFB4",
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
