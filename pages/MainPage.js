import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppTitle from "../components/Common/AppTitle";
import InputBox from "../components/Main/InputBox";
import Stops from "../components/Main/Stops";
import MainNavigate from "../components/Common/MainNavigate";
import { useSelector } from "react-redux";
import FavoriteStops from "../components/Main/FavoriteStops";

export default function App() {
  const mainPageButtonName = useSelector(
    (state) => state.stopRedux.mainPageButtonName
  );

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <View style={styles.appTitle}>
        <AppTitle />
      </View>
      {mainPageButtonName === "All" && (
        <View style={styles.inputBox}>
          <InputBox />
        </View>
      )}
      {mainPageButtonName === "All" ? (
        <View style={styles.allStops}>
          <Stops />
        </View>
      ) : (
        <View style={styles.favoriteStops}>
          <FavoriteStops />
        </View>
      )}

      <View style={styles.navigate}>
        <MainNavigate />
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
  allStops: {
    flex: 1,
  },
  favoriteStops: {
    flex: 1,
  },
});
