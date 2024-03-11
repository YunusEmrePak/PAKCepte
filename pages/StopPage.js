import { useDispatch, useSelector } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppTitle from "../components/Common/AppTitle";
import StopName from "../components/Stop/StopName";
import Navigate from "../components/Common/Navigate";
import SincanWay from "../components/Stop/SincanWay";
import KayasWay from "../components/Stop/KayasWay";

export default function StopPage() {
  const stopName = useSelector(state => state.stopRedux.stopName);

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
        <AppTitle />
      <View style={styles.stopName}>
        <StopName name={stopName} />
      </View>
      <View style={styles.sincanWay}>
        <SincanWay />
      </View>
      <View style={styles.kayasWay}>
        <KayasWay />
      </View>
      <View style={styles.navigate}>
        <Navigate />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "red",
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // appTitle: {
  //   flex: 1,
  // },
  // stopName: {
  //   flex: 1,
  // },
  // sincanWay: {
  //   flex: 3,
  // },
  // kayasWay: {
  //   flex: 2,
  // },
  // navigate: {
  //   flex: 1,
  // },
});
