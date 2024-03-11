import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stopName: null,
  pageName: null,
  stops: [
    { id: 1, name: "Sincan" },
    { id: 2, name: "Lale" },
    { id: 3, name: "Elvankent" },
    { id: 4, name: "Eryaman" },
    { id: 5, name: "Özgüneş" },
    { id: 6, name: "Etimesgut" },
    { id: 7, name: "Hava İstasyonu" },
    { id: 8, name: "Yıldırım" },
    { id: 9, name: "Behiçbey" },
    { id: 10, name: "Marşandiz" },
    { id: 11, name: "Gazi" },
    { id: 12, name: "Gazi Mahallesi" },
    { id: 13, name: "Hipodrom" },
    { id: 14, name: "Gar" },
    { id: 15, name: "Yenişehir" },
    { id: 16, name: "Kurtuluş" },
    { id: 17, name: "Cebeci" },
    { id: 18, name: "Demirlibahçe" },
    { id: 19, name: "Saimekadın" },
    { id: 20, name: "Mamak" },
    { id: 21, name: "Bağderesi" },
    { id: 22, name: "Üreğil" },
    { id: 23, name: "Köstence" },
    { id: 24, name: "Kayaş" },
  ],
  filteredStops: [
    { id: 1, name: "Sincan" },
    { id: 2, name: "Lale" },
    { id: 3, name: "Elvankent" },
    { id: 4, name: "Eryaman" },
    { id: 5, name: "Özgüneş" },
    { id: 6, name: "Etimesgut" },
    { id: 7, name: "Hava İstasyonu" },
    { id: 8, name: "Yıldırım" },
    { id: 9, name: "Behiçbey" },
    { id: 10, name: "Marşandiz" },
    { id: 11, name: "Gazi" },
    { id: 12, name: "Gazi Mahallesi" },
    { id: 13, name: "Hipodrom" },
    { id: 14, name: "Gar" },
    { id: 15, name: "Yenişehir" },
    { id: 16, name: "Kurtuluş" },
    { id: 17, name: "Cebeci" },
    { id: 18, name: "Demirlibahçe" },
    { id: 19, name: "Saimekadın" },
    { id: 20, name: "Mamak" },
    { id: 21, name: "Bağderesi" },
    { id: 22, name: "Üreğil" },
    { id: 23, name: "Köstence" },
    { id: 24, name: "Kayaş" },
  ],
  searchQuery: "",
  timesSincan: null,
  timesKayas: null,
  remainingTimeSincan: null,
  remainingTimeKayas: null,
  stopId: null,
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
  },
});

export const stopActions = stopSlice.actions;

export default stopSlice.reducer;
