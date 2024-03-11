import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stopName: null,
  pageName: null,
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
  isPressedBackButton: false,
  isPressedStopButton: false,
  isPressedTimeButton: false,
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
    setIsPressedBackButton(state) {
      state.isPressedBackButton = !state.isPressedBackButton;
    },
    setIsPressedStopButton(state) {
      state.isPressedStopButton = !state.isPressedStopButton;
    },
    setIsPressedTimeButton(state) {
      state.isPressedTimeButton = !state.isPressedTimeButton;
    },
  },
});

export const stopActions = stopSlice.actions;

export default stopSlice.reducer;
