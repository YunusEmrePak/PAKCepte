import { useDispatch, useSelector } from "react-redux";

import { FlatList, StyleSheet, View } from "react-native";
import Stop from "./Stop";

export default function Stops() {
  const dispatch = useDispatch();

  const filteredStops = useSelector((state) => state.stopRedux.filteredStops);

  return (
    <View style={styles.stopsContainer}>
      <FlatList
        data={filteredStops}
        renderItem={(itemData) => (
          <Stop name={itemData.item.name} id={itemData.item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stopsContainer: {
    padding: 16,
  },
  stopItem: {
    flex: 1,
  },
});
