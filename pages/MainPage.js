import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppTitle from "../components/Common/AppTitle";
import InputBox from "../components/Main/InputBox";
import Stops from "../components/Main/Stops";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <View style={styles.appTitle}>
        <AppTitle />
      </View>
      <View style={styles.inputBox}>
        <InputBox />
      </View>
      <View style={styles.stops}>
        <Stops />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
  },
  appTitle: {},
  inputBox: {},
  stops: {
    flex: 1,
  },
});
