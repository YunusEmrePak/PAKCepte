import { StyleSheet, Text, View } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function StopName({ name }) {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 10,
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
  },
  name: {
    fontSize: DEVICE_WIDTH / 10.5,
    fontWeight: "800",
    marginBottom: DEVICE_HEIGHT / 80,
  },
});
