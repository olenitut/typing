import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accuracyStats: [],
};

const statSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStat(state, { payload }) {
      state.accuracyStats = state.accuracyStats.concat(payload);
      localStorage.setItem(
        "accuracyStats",
        JSON.stringify(state.accuracyStats)
      );
    },
  },
});

export const { setStat } = statSlice.actions;

export default statSlice.reducer;
