import { Image, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import TitleIcon from "../../assets/titleIcon.png";

export default function AppTitle() {
  return (
    <View>
      <LinearGradient
        colors={["#034FAF", "#59D9E4"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.titleContainer}
      >
        <Image source={TitleIcon} style={styles.titleIcon} />
        <Text style={styles.titleText}>Başkentray Cepte</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 120,
    paddingTop: 40,
    paddingLeft: 40,
    width: 420
  },
  titleIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  titleText: {
    color: "#fff",
    fontSize: 40,
  },
});
