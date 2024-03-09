import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stopName: null,
  stops: [
    { id: 1, name: "Yenişehir" },
    { id: 2, name: "Etimesgut" },
    { id: 3, name: "Ankara" },
    { id: 4, name: "Hipodrom" },
  ],
  filteredStops: [
    { id: 1, name: "Yenişehir" },
    { id: 2, name: "Etimesgut" },
    { id: 3, name: "Ankara" },
    { id: 4, name: "Hipodrom" },
  ],
  searchQuery: "",
};
export const stopSlice = createSlice({
  name: "stop",
  initialState,
  reducers: {
    setStopName: (state, action) => {
      state.stopName = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilteredStops(state, action) {
      state.filteredStops = action.payload;
    },
  },
});

export const stopActions = stopSlice.actions;

export default stopSlice.reducer;
