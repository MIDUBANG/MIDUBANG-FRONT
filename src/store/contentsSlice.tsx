import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "contentsSlice";

type stateType = {
  inclusions: number[];
  omissions: number[];
  contents: string[];
};

const initialState: stateType = {
  inclusions: [],
  omissions: [],
  contents: [],
};

export const contentsSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initContents: (state) => {
      state.inclusions = initialState.inclusions;
      state.omissions = initialState.omissions;
      state.contents = initialState.contents;
    },
    setContents: (state, action) => {
      state.contents = action.payload.contents;
    },
    setFinalContentsArray: (state, action) => {
      state.inclusions = action.payload.inclusions;
      state.omissions = action.payload.omissions;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initContents, setContents, setFinalContentsArray } =
  contentsSlice.actions;

export default contentsSlice.reducer;
