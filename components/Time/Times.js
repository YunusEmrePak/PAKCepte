import { FlatList, StyleSheet, Text, View } from "react-native";

import SincanHours from "./SincanHours";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import { useSelector } from "react-redux";
import KayasHours from "./KayasHours";

const hours = [
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
  {
    id: 21,
  },
  {
    id: 22,
  },
  {
    id: 23,
  },
];

export default function Times() {
  const timesButtonName = useSelector(
    (state) => state.stopRedux.timesButtonName
  );

  return (
    <View style={styles.tableContainer}>
      <View style={styles.titles}>
        <View style={styles.hours}>
          <Text style={styles.hoursText}>Saat</Text>
        </View>
        <View style={styles.minutes}>
          <Text style={styles.minutesText}>Seferler</Text>
        </View>
      </View>
      {timesButtonName === "Sincan" ? (
        <View key={Math.random()}>
          <FlatList
            data={hours}
            renderItem={(itemData) => <SincanHours id={itemData.item.id} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View key={Math.random()}>
          <FlatList
            data={hours}
            renderItem={(itemData) => <KayasHours id={itemData.item.id} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 1.5,
    marginBottom: DEVICE_HEIGHT / 20,
  },
  titles: {
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 23,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bd9997",
    marginBottom: DEVICE_HEIGHT / 300,
  },
  hours: {
    width: DEVICE_WIDTH / 7,
    height: DEVICE_HEIGHT / 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bd9997",
  },
  minutes: {
    width: DEVICE_WIDTH / 1.45,
    // backgroundColor: "green",
    height: DEVICE_HEIGHT / 24,
    justifyContent: "center",
    paddingLeft: DEVICE_WIDTH / 50,
  },
  hoursText: {
    // fontSize: 14,
    fontWeight: "500",
  },
  minutesText: {
    // fontSize: 14,
    fontWeight: "600",
  },
});
