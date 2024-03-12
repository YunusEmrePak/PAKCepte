import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadArrayFromStorage = createAsyncThunk(
  'array/loadArrayFromStorage',
  async () => {
    try {
      const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');

      if (isFirstLaunch === null) {
        // First Launch - Set flag
        await AsyncStorage.setItem('isFirstLaunch', 'false'); 
        return []; // Return an empty array for the initial setup
      } else {
        const storedArray = await AsyncStorage.getItem('myStoredArray');
        return storedArray ? JSON.parse(storedArray) : [];
      }

    } catch (error) {
      throw error;
    }
  }
);

export const saveArrayToStorage = createAsyncThunk(
  "array/saveArrayToStorage",
  async (array) => {
    try {
      await AsyncStorage.setItem("myStoredArray", JSON.stringify(array));
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
  notStoredStops: [
    { id: 1, name: "Sincan", isFavorite: false },
    { id: 2, name: "Lale", isFavorite: false },
    { id: 3, name: "Elvankent", isFavorite: false },
    { id: 4, name: "Eryaman", isFavorite: false },
    { id: 5, name: "Özgüneş", isFavorite: false },
    { id: 6, name: "Etimesgut", isFavorite: false },
    { id: 7, name: "Hava İstasyonu", isFavorite: false },
    { id: 8, name: "Yıldırım", isFavorite: false },
    { id: 9, name: "Behiçbey", isFavorite: false },
    { id: 10, name: "Marşandiz", isFavorite: false },
    { id: 11, name: "Gazi", isFavorite: false },
    { id: 12, name: "Gazi Mahallesi", isFavorite: false },
    { id: 13, name: "Hipodrom", isFavorite: false },
    { id: 14, name: "Gar", isFavorite: false },
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
  ],
  stops: [
    { id: 1, name: "Sincan", isFavorite: false },
    { id: 2, name: "Lale", isFavorite: false },
    { id: 3, name: "Elvankent", isFavorite: false },
    { id: 4, name: "Eryaman", isFavorite: false },
    { id: 5, name: "Özgüneş", isFavorite: false },
    { id: 6, name: "Etimesgut", isFavorite: false },
    { id: 7, name: "Hava İstasyonu", isFavorite: false },
    { id: 8, name: "Yıldırım", isFavorite: false },
    { id: 9, name: "Behiçbey", isFavorite: false },
    { id: 10, name: "Marşandiz", isFavorite: false },
    { id: 11, name: "Gazi", isFavorite: false },
    { id: 12, name: "Gazi Mahallesi", isFavorite: false },
    { id: 13, name: "Hipodrom", isFavorite: false },
    { id: 14, name: "Gar", isFavorite: false },
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
  ],
  filteredStops: [],
  favoriteStops: [],
  searchQuery: "",
  timesSincan: null,
  timesKayas: null,
  remainingTimeSincan: null,
  remainingTimeKayas: null,
  stopId: null,
  timesButtonName: "Sincan",
  mainPageButtonName: "All",
  favoriteIndex: null,
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
    setTimesButtonName(state, action) {
      state.timesButtonName = action.payload;
    },
    setMainPageButtonName(state, action) {
      state.mainPageButtonName = action.payload;
    },
    setFavorite(state, action) {
      const index = action.payload;
      state.stops[index].isFavorite = !state.stops[index].isFavorite;
      state.favoriteIndex = index + 1;
    },
    setFavoriteStops(state, action) {
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
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadArrayFromStorage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadArrayFromStorage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stops = action.payload;
      })
      .addCase(loadArrayFromStorage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(saveArrayToStorage.fulfilled, (state, action) => {
        // Array saved, you might optionally refetch or update state
      });
  },
});

export const stopActions = stopSlice.actions;

export default stopSlice.reducer;
