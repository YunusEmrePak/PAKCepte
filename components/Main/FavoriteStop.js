import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/fullStar.png";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/constants";
import {
  stopActions
} from "../../redux/stopSlice";

export default function FavoriteStop({ id, name, number }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favoriteControl = useSelector((state) => state.stopRedux.stops);

  const favoriteStops = useSelector((state) => state.stopRedux.favoriteStops);
  const stopId = useSelector((state) => state.stopRedux.stopId);

  const navigateStop = () => {
    dispatch(stopActions.setStopName(name));
    dispatch(stopActions.setPageName("Stop"));
    dispatch(stopActions.setStopId(id));
    navigation.navigate("Stop");
  };

  const addToFavorite = () => {
    dispatch(stopActions.setStopId(id));
    const favorite = {
      id: id,
      name: name,
      isFavorite: true,
    };
    dispatch(stopActions.setFavoriteStops(favorite));
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
          <Text style={styles.idText}>{number}</Text>
        </LinearGradient>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Pressable onPress={addToFavorite}>
            <Image
              source={favoriteControl[id - 1] ? fullStar : emptyStar}
              style={styles.emptyStar}
            />
          </Pressable>
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
    height: DEVICE_WIDTH / 7.5,
    width: DEVICE_WIDTH / 7.5,
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
    justifyContent: "space-between",
    width: DEVICE_WIDTH / 1.31,
    paddingLeft: DEVICE_WIDTH / 40,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },
  name: {
    color: "black",
    fontSize: 24,
  },
  emptyStar: {
    width: DEVICE_WIDTH / 14,
    height: DEVICE_WIDTH / 14,
    marginRight: DEVICE_WIDTH / 40,
  },
});
