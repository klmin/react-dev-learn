import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

// ✅ Redux Store 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
}); 