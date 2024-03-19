import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { stopActions } from "../../redux/stopSlice";

import backIcon from "../../assets/backButtonLight.png";
import stopTimeIconDark from "../../assets/clipboardDark.png";
import stopTimeIcon from "../../assets/clipboardLight.png";
import clockIconDark from "../../assets/clockDark.png";
import clockIcon from "../../assets/clockLight.png";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function Navigate() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const stops = useSelector((state) => state.stopRedux.stops);
  const pageName = useSelector((state) => state.stopRedux.pageName);

  const navigateBack = () => {
    dispatch(stopActions.setPageName("Main"));
    dispatch(stopActions.setSearchQuery(""));
    dispatch(stopActions.setFilteredStops(stops));
    navigation.navigate("Main");
  };

  const navigateStop = () => {
    dispatch(stopActions.setPageName("Stop"));
    navigation.navigate("Stop");
  };

  const navigateStopTime = () => {
    dispatch(stopActions.setPageName("Time"));
    dispatch(stopActions.setTimesButtonName("Sincan"));
    navigation.navigate("Time");
  };

  return (
    <View style={styles.navigateContainer}>
      <Pressable onPress={navigateBack}>
        <View style={styles.navigate}>
          <Image source={backIcon} style={styles.icon} />
          <Text style={styles.text}>Geri</Text>
        </View>
      </Pressable>
      <Pressable onPress={navigateStop}>
        <View style={styles.navigate}>
          <Image
            source={pageName === "Stop" ? clockIconDark : clockIcon}
            style={styles.icon}
          />
          <Text style={styles.text}>Durak</Text>
        </View>
      </Pressable>
      <Pressable onPress={navigateStopTime}>
        <View style={styles.navigate}>
          <Image
            source={pageName === "Time" ? stopTimeIconDark : stopTimeIcon}
            style={styles.icon}
          />
          <Text style={styles.text}>Saatler</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navigateContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 12,
  },
  navigate: {
    alignItems: "center",
    justifyContent: "space-between",
    height: DEVICE_HEIGHT / 17,
    width: DEVICE_WIDTH / 4,
  },
  icon: {
    width: DEVICE_WIDTH / 17,
    height: DEVICE_WIDTH / 17,
  },
  text: {
    fontSize: DEVICE_WIDTH / 20.5,
    color: "#2A2323",
  },
});
