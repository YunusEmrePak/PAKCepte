import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import findIcon from "../../assets/find.png";
import { useEffect, useRef } from "react";
import { stopActions } from "../../redux/stopSlice";

export default function InputBox() {
  const dispatch = useDispatch();

  const allStops = useSelector((state) => state.stopRedux.stops);
  const query = useSelector((state) => state.stopRedux.searchQuery);

  const filteredStops = allStops.filter((stop) =>
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
    height: 80,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#D9D9D9",
    marginBottom: 16,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 12,
    fontSize: 18,
  },
  findButton: {
    height: 50,
    width: "40%",
    // borderWidth: 2,
    // borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: -22,
  },
  findIcon: {
    width: 30,
    height: 30,
  },
});
