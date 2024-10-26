import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadArray, loadArrayFavorite } from "../../redux/stopSlice";

import FavoriteStop from "./FavoriteStop";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function FavoriteStops() {
  const dispatch = useDispatch();

  const favoriteStops = useSelector((state) => state.stopRedux.favoriteStops);

  useEffect(() => {
    dispatch(loadArray());
    dispatch(loadArrayFavorite());
  }, [dispatch]);

  return (
    <View style={styles.stopsContainer}>
      {favoriteStops.length > 0 ? (
        <FlatList
          data={favoriteStops}
          renderItem={({ item, index }) => (
            <FavoriteStop name={item.name} id={item.id} number={index + 1} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noFavoriteText}>Favori durak bulunamadı.</Text>
      )}
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
  noFavoriteText: {
    fontSize: DEVICE_WIDTH / 19,
  },
});
