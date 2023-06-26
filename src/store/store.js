import { configureStore } from "@reduxjs/toolkit";
import statSlice from "./slices/statSlice";

const store = configureStore({
  reducer: { stat: statSlice },
});

export default store;
