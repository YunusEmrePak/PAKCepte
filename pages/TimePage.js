import { StyleSheet, Text, View } from "react-native";
import Navigate from "../components/Common/Navigate";
import { StatusBar } from "expo-status-bar";
import AppTitle from "../components/Common/AppTitle";
import Times from "../components/Time/Times";
import TimePageButtons from "../components/Time/TimePageButtons";

export default function TimePage() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <AppTitle />
      <TimePageButtons />
      <Times />
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
