import { StyleSheet, Text, View } from "react-native";
import Navigate from "../components/Common/Navigate";
import { StatusBar } from "expo-status-bar";
import AppTitle from "../components/Common/AppTitle";

export default function TimePage() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <AppTitle />
      <Text style={styles.info}>Time Page</Text>
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
  info: {
    fontSize: 50,
    fontWeight: "500",
  },
});
