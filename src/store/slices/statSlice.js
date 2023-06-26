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
    },
  },
});

export const { setStat } = statSlice.actions;

export default statSlice.reducer;
