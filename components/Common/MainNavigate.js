import { Pressable, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { stopActions } from "../../redux/stopSlice";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function MainNavigate() {
  const dispatch = useDispatch();

  const mainPageButtonName = useSelector(
    (state) => state.stopRedux.mainPageButtonName
  );

  const navigateAllStops = () => {
    dispatch(stopActions.setMainPageButtonName("All"));
  };

  const navigateFavoriteStop = () => {
    dispatch(stopActions.setMainPageButtonName("Favorite"));
  };

  return (
    <View style={styles.navigateContainer}>
      <Pressable onPress={navigateAllStops}>
        <View
          style={[
            styles.navigate,
            styles.navigateAllStop,
            mainPageButtonName === "All" && styles.active,
          ]}
        >
          <Text style={styles.stops}>Tüm Duraklar</Text>
        </View>
      </Pressable>
      <Pressable onPress={navigateFavoriteStop}>
        <View
          style={[
            styles.navigate,
            styles.navigateFavoriteStop,
            mainPageButtonName === "Favorite" && styles.active,
          ]}
        >
          <Text style={styles.stops}>Favoriler</Text>
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
    justifyContent: "center",
    padding: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 14,
  },
  navigate: {
    backgroundColor: "#48BDD9",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 2.75,
    height: DEVICE_HEIGHT / 19,
  },
  navigateAllStop: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  navigateFavoriteStop: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  stops: {
    fontSize: DEVICE_WIDTH / 20.5,
    color: "#fff",
  },
  active: {
    backgroundColor: "#166DBB",
  },
});
