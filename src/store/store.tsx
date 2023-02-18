import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";

import resultReducer from "./resultSlice";
import extraInfoReducer from "./extraInfoSlice";

const reducers = combineReducers({
  result: resultReducer,
  extraInfo: extraInfoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
// React에서 사용할 수 있도록 타입을 만들어 export 해준다.

export type RootState = ReturnType<typeof reducers>;