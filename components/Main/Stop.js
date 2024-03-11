import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { stopActions } from "../../redux/stopSlice";

import { useNavigation } from "@react-navigation/native";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function Stop({ id, name }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateStop = () => {
    dispatch(stopActions.setStopName(name));

    navigation.navigate("Stop");
  };

  return (
    <Pressable onPress={navigateStop}>
      <View style={styles.stopContainer}>
        <LinearGradient
          colors={["#034FAF", "#59D9E4"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.idContainer}
        >
          <Text style={styles.idText}>{id}</Text>
        </LinearGradient>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stopContainer: {
    flexDirection: "row",
    marginBottom: DEVICE_HEIGHT / 70,
  },
  idContainer: {
    backgroundColor: "blue",
    height: DEVICE_WIDTH / 8.5,
    width: DEVICE_WIDTH / 8.5,
    marginRight: DEVICE_WIDTH / 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  idText: {
    color: "white",
    fontSize: 24,
  },
  nameContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: DEVICE_WIDTH / 1.28,
    paddingLeft: DEVICE_WIDTH / 40,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },
  name: {
    color: "black",
    fontSize: 24,
  },
});
