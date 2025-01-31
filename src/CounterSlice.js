import { createSlice } from "@reduxjs/toolkit";

// ✅ 초기 상태
const initialState = {
  value: 0,
};

// ✅ Slice 생성 (Reducer + Action 포함)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// ✅ Action과 Reducer 내보내기
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;