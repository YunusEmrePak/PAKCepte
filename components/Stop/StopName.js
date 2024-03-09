import { StyleSheet, Text, View } from "react-native";

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
    padding: 0,
    width: 420,
    height: 100,
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
  },
  name: {
    fontSize: 40,
    fontWeight: "800",
  },
});
