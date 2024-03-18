import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialStops = [
  { id: 1, name: "Sincan", isFavorite: false },
  { id: 2, name: "Lale", isFavorite: false },
  { id: 3, name: "Elvankent", isFavorite: false },
  { id: 4, name: "Eryaman", isFavorite: false },
  { id: 5, name: "Özgüneş", isFavorite: false },
  { id: 6, name: "Etimesgut", isFavorite: false },
  { id: 7, name: "Hava Durağı", isFavorite: false },
  { id: 8, name: "Yıldırım", isFavorite: false },
  { id: 9, name: "Behiçbey", isFavorite: false },
  { id: 10, name: "Motor Durağı", isFavorite: false },
  { id: 11, name: "Gazi", isFavorite: false },
  { id: 12, name: "Gazi Mahallesi", isFavorite: false },
  { id: 13, name: "Hipodrom", isFavorite: false },
  { id: 14, name: "Ankara", isFavorite: false },
  { id: 15, name: "Yenişehir", isFavorite: false },
  { id: 16, name: "Kurtuluş", isFavorite: false },
  { id: 17, name: "Cebeci", isFavorite: false },
  { id: 18, name: "Demirlibahçe", isFavorite: false },
  { id: 19, name: "Saimekadın", isFavorite: false },
  { id: 20, name: "Mamak", isFavorite: false },
  { id: 21, name: "Bağderesi", isFavorite: false },
  { id: 22, name: "Üreğil", isFavorite: false },
  { id: 23, name: "Köstence", isFavorite: false },
  { id: 24, name: "Kayaş", isFavorite: false },
];

export const loadArray = createAsyncThunk(
  "myArray/load",
  async (_, { dispatch }) => {
    try {
      const jsonValue = await AsyncStorage.getItem("allTheStops");

      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      } else {
        await storeArray(initialStops);
        return initialStops;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const storeArray = createAsyncThunk(
  "myArray/save",
  async (arrayData) => {
    try {
      const jsonValue = JSON.stringify(arrayData);
      await AsyncStorage.setItem("allTheStops", jsonValue);
    } catch (error) {
      throw error;
    }
  }
);

export const loadArrayFavorite = createAsyncThunk(
  "myArray/loadFavorite",
  async (_, { dispatch }) => {
    try {
      const jsonValue = await AsyncStorage.getItem("allTheFavorites");

      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      } else {
        await storeArray([]);
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
);

export const storeArrayFavorite = createAsyncThunk(
  "myArray/saveFav",
  async (arrayData) => {
    try {
      const jsonValue = JSON.stringify(arrayData);
      await AsyncStorage.setItem("allTheFavorites", jsonValue);
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  stopName: null,
  pageName: null,
  stops: [],
  filteredStops: [],
  favoriteStops: [],
  searchQuery: "",
  timesSincan: null,
  timesKayas: null,
  remainingTimeSincan: null,
  remainingTimeKayas: null,
  stopId: null,
  stopFavoriteId: null,
  timesButtonName: "Sincan",
  mainPageButtonName: "All",
  isClickedToFavoriteButton: false,
};

export const stopSlice = createSlice({
  name: "stop",
  initialState,
  reducers: {
    setStopName: (state, action) => {
      state.stopName = action.payload;
    },
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilteredStops(state, action) {
      state.filteredStops = action.payload;
    },
    setTimesSincan(state, action) {
      state.timesSincan = action.payload;
    },
    setTimesKayas(state, action) {
      state.timesKayas = action.payload;
    },
    setRemainingTimeSincan(state, action) {
      state.remainingTimeSincan = action.payload;
    },
    setRemainingTimeKayas(state, action) {
      state.remainingTimeKayas = action.payload;
    },
    setStopId(state, action) {
      state.stopId = action.payload;
    },
    setStopFavoriteId(state, action) {
      state.stopFavoriteId = action.payload;
    },
    setIsClickedToFavoriteButton(state) {
      state.isClickedToFavoriteButton = !state.isClickedToFavoriteButton;
    },
    setTimesButtonName(state, action) {
      state.timesButtonName = action.payload;
    },
    setMainPageButtonName(state, action) {
      state.mainPageButtonName = action.payload;
    },
    setStorageClear() {
      AsyncStorage.clear();
    },
    setFavoriteStops(state, action) {
      const index = action.payload.id - 1;
      state.stops[index].isFavorite = !state.stops[index].isFavorite;

      if (state.stops[state.stopId - 1].isFavorite) {
        state.favoriteStops.push(action.payload);
      } else {
        const indexToDelete = state.favoriteStops.findIndex(
          (item) => item.id === state.stopId
        );
        if (indexToDelete !== -1) {
          state.favoriteStops.splice(indexToDelete, 1);
        }
      }
      const jsonAll = JSON.stringify(state.stops);
      const jsonFavorite = JSON.stringify(state.favoriteStops);
      AsyncStorage.setItem("allTheStops", jsonAll);
      AsyncStorage.setItem("allTheFavorites", jsonFavorite);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadArray.fulfilled, (state, action) => {
      state.stops = action.payload;
    });
    builder.addCase(loadArrayFavorite.fulfilled, (state, action) => {
      state.favoriteStops = action.payload;
    });
  },
});

export const stopActions = stopSlice.actions;

export default stopSlice.reducer;
