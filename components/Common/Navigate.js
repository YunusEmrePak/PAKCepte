import { Image, Pressable, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import backIcon from "../../assets/backButtonLight.png";
import clockIcon from "../../assets/clockLight.png";
import stopTimeIcon from "../../assets/clipboardLight.png";
import backIconDark from "../../assets/backButtonDark.png";
import clockIconDark from "../../assets/clockDark.png";
import stopTimeIconDark from "../../assets/clipboardDark.png";

import { stopActions } from "../../redux/stopSlice";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function Navigate() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const stops = useSelector((state) => state.stopRedux.stops);
  const pageName = useSelector((state) => state.stopRedux.pageName);
  const isPressedBackButton = useSelector(
    (state) => state.stopRedux.isPressedBackButton
  );
  const isPressedStopButton = useSelector(
    (state) => state.stopRedux.isPressedStopButton
  );
  const isPressedTimeButton = useSelector(
    (state) => state.stopRedux.isPressedTimeButton
  );

  const navigateBack = () => {
    dispatch(stopActions.setPageName("Main"));
    dispatch(stopActions.setSearchQuery(""));
    dispatch(stopActions.setFilteredStops(stops));
    dispatch(stopActions.setIsPressedBackButton());
    navigation.navigate("Main");
  };

  const navigateStop = () => {
    dispatch(stopActions.setPageName("Stop"));
    dispatch(stopActions.setIsPressedStopButton());
    navigation.navigate("Stop");
  };

  const navigateStopTime = () => {
    dispatch(stopActions.setPageName("Time"));
    dispatch(stopActions.setIsPressedTimeButton());
    navigation.navigate("Time");
  };

  const setBackButtonColor = () => {
    dispatch(stopActions.setIsPressedBackButton());
  };

  const setStopButtonColor = () => {
    dispatch(stopActions.setIsPressedStopButton());
  };

  const setTimeButtonColor = () => {
    dispatch(stopActions.setIsPressedTimeButton());
  };

  return (
    <View style={styles.navigateContainer}>
      <Pressable onPress={navigateBack} onPressIn={setBackButtonColor}>
        <View style={styles.navigateBack}>
          <Image
            source={isPressedBackButton ? backIconDark : backIcon}
            style={styles.backIcon}
          />
        </View>
      </Pressable>
      <Pressable onPress={navigateStop} onPressIn={setStopButtonColor}>
        <View style={styles.navigateStop}>
          <Image
            source={
              pageName === "Stop" ||
              (pageName === "Time" && isPressedStopButton)
                ? clockIconDark
                : clockIcon
            }
            style={styles.clockIcon}
          />
        </View>
      </Pressable>
      <Pressable onPress={navigateStopTime} onPressIn={setTimeButtonColor}>
        <View style={styles.navigateStopTime}>
          <Image
            source={
              pageName === "Time" || isPressedTimeButton
                ? stopTimeIconDark
                : stopTimeIcon
            }
            style={styles.stopTimeIcon}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navigateContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 14,
  },
  backIcon: {
    width: DEVICE_WIDTH / 9,
    height: DEVICE_WIDTH / 9,
  },
  clockIcon: {
    width: DEVICE_WIDTH / 9,
    height: DEVICE_WIDTH / 9,
  },
  stopTimeIcon: {
    width: DEVICE_WIDTH / 9,
    height: DEVICE_WIDTH / 9,
  },
});
