import { useDispatch, useSelector } from "react-redux";

import { FlatList, StyleSheet, View } from "react-native";
import Stop from "./Stop";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";


export default function Stops() {
  const dispatch = useDispatch();

  const notStoredStops = useSelector((state) => state.stopRedux.notStoredStops);

  const filteredStops = useSelector((state) => state.stopRedux.filteredStops);
  const stops = useSelector((state) => state.stopRedux.stops);

  const stopId = useSelector((state) => state.stopRedux.stopId);



  return (
    <View style={styles.stopsContainer}>
      <FlatList
        data={filteredStops ? filteredStops : stops}
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
    paddingHorizontal: DEVICE_WIDTH / 30,
    paddingVertical: DEVICE_HEIGHT / 80,
  },
  stopItem: {
    flex: 1,
  },
});
