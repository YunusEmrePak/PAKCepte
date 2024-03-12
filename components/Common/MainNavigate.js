import { Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";


import { stopActions } from "../../redux/stopSlice";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function MainNavigate() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const stops = useSelector((state) => state.stopRedux.stops);
  const pageName = useSelector((state) => state.stopRedux.pageName);

  const favoriteControl = useSelector((state) => state.stopRedux.stops);

  const favoriteStops = useSelector((state) => state.stopRedux.favoriteStops);

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
        <View style={[styles.navigateAllStops, mainPageButtonName === "All" && styles.active]}>
          <Text style={styles.allStops}>Tüm Duraklar</Text>
        </View>
      </Pressable>
      <Pressable onPress={navigateFavoriteStop}>
        <View style={[styles.navigateFavoriteStop, mainPageButtonName === "Favorite" && styles.active]}>
          <Text style={styles.favoriteStops}>Favoriler</Text>
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
  navigateAllStops: {
    backgroundColor: "#48BDD9",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 2.75,
    height: DEVICE_HEIGHT / 19,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  navigateFavoriteStop: {
    backgroundColor: "#48BDD9",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH / 2.75,
    height: DEVICE_HEIGHT / 19,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  allStops: {
    fontSize: 20,
    color: "#fff",
  },
  favoriteStops: {
    fontSize: 20,
    color: "#fff",
  },
  active: {
    backgroundColor: "#166DBB",
  },
});
