import { Image, Pressable, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import backIcon from "../../assets/backButtonLight.png";
import clockIcon from "../../assets/clockLight.png";
import stopTimeIcon from "../../assets/clipboardLight.png";
import { stopActions } from "../../redux/stopSlice";

export default function Navigate() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const stops = useSelector((state) => state.stopRedux.stops);

  const navigateBack = () => {
    navigation.navigate("Main");
    dispatch(stopActions.setSearchQuery(""));
    dispatch(stopActions.setFilteredStops(stops));
  };

  const navigateStop = () => {
    navigation.navigate("Stop");
  };

  const navigateStopTime = () => {
    navigation.navigate("Time");
  };

  return (
    <View style={styles.navigateContainer}>
      <Pressable onPress={navigateBack}>
        <View style={styles.navigateBack}>
          <Image source={backIcon} style={styles.backIcon} />
        </View>
      </Pressable>
      <Pressable onPress={navigateStop}>
        <View style={styles.navigateStop}>
          <Image source={clockIcon} style={styles.clockIcon} />
        </View>
      </Pressable>
      <Pressable onPress={navigateStopTime}>
        <View style={styles.navigateStopTime}>
          <Image source={stopTimeIcon} style={styles.stopTimeIcon} />
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
    width: 420,
    height: 75,
  },
  backIcon: {
    width: 60,
    height: 60,
  },
  clockIcon: {
    width: 60,
    height: 60,
  },
  stopTimeIcon: {
    width: 60,
    height: 60,
  },
});
