import { useDispatch, useSelector } from "react-redux";

import { FlatList, StyleSheet, View } from "react-native";
import Stop from "./Stop";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import FavoriteStop from "./FavoriteStop";

export default function FavoriteStops() {
  const dispatch = useDispatch();

  const favoriteStops = useSelector((state) => state.stopRedux.favoriteStops);

  return (
    <View style={styles.stopsContainer}>
      <FlatList
        data={favoriteStops}
        renderItem={({ item, index }) => (
          <FavoriteStop name={item.name} id={item.id} number={index + 1} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stopsContainer: {
    paddingHorizontal: DEVICE_WIDTH / 30,
    paddingVertical: DEVICE_HEIGHT / 40,
  },
  stopItem: {
    flex: 1,
  },
});
