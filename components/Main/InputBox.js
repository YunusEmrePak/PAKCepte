import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";

import { stopActions } from "../../redux/stopSlice";

import { LinearGradient } from "expo-linear-gradient";

import findIcon from "../../assets/find.png";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";

export default function InputBox() {
  const dispatch = useDispatch();

  const allStops = useSelector((state) => state.stopRedux.stops);
  const query = useSelector((state) => state.stopRedux.searchQuery);

  const filteredStops =
    allStops &&
    allStops.filter((stop) =>
      stop.name.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    dispatch(stopActions.setFilteredStops(filteredStops));
  }, [filteredStops, handleSearch]);

  const handleSearch = () => {
    dispatch(stopActions.setFilteredStops(filteredStops));
  };

  return (
    <View style={styles.inputBoxContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Durak Adı"
          placeholderTextColor="#838383"
          value={query}
          onChangeText={(text) => {
            dispatch(stopActions.setSearchQuery(text));
          }}
        />
      </View>
      <Pressable style={styles.findButton} onPress={handleSearch}>
        <LinearGradient
          colors={["#034FAF", "#59D9E4"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.findButton}
        >
          <Image source={findIcon} style={styles.findIcon} />
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBoxContainer: {
    height: DEVICE_HEIGHT / 10,
    flexDirection: "row",
    paddingHorizontal: DEVICE_WIDTH / 50,
    paddingVertical: DEVICE_HEIGHT / 50,
    justifyContent: "space-between",
    alignItems: "center",
    width: DEVICE_WIDTH,
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
    marginBottom: DEVICE_HEIGHT / 60,
  },
  inputContainer: {
    width: DEVICE_WIDTH / 1.3,
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 2,
    height: DEVICE_HEIGHT / 16.5,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: DEVICE_WIDTH / 30,
    fontSize: DEVICE_WIDTH / 20,
  },
  findButton: {
    height: DEVICE_HEIGHT / 16.5,
    width: DEVICE_WIDTH / 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: -DEVICE_WIDTH / 40,
  },
  findIcon: {
    width: DEVICE_WIDTH / 15,
    height: DEVICE_WIDTH / 15,
  },
});
