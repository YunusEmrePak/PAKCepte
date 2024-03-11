import { Image, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import TitleIcon from "../../assets/titleIcon.png";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: DEVICE_HEIGHT / 7.5,
    paddingBottom: DEVICE_HEIGHT / 45,
    width: DEVICE_WIDTH,
  },
  titleIcon: {
    width: DEVICE_WIDTH / 8,
    height: DEVICE_WIDTH / 8,
    marginRight: "4%",
  },
  titleText: {
    color: "#fff",
    fontSize: 40,
  },
});
