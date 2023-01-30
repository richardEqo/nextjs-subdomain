import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IRootState } from "./types";
import user from "../redux/slices/user";

let realStore: any = null;
const objReducer = {
  user,
};

export function createStore(preloadedState?: any) {
  if (realStore) return realStore;
  const tStore = configureStore({
    reducer: objReducer,
    preloadedState,
    devTools: true,
  });
  realStore = tStore;
  return tStore;
}

const store = {
  get tryDispatch() {
    return (...args: any[]) => {
      if (realStore) realStore.dispatch(...args);
      console.table("Wrong dispatch is called", args);
    };
  },
};

export function getStore() {
  return realStore;
}

export type RootState = IRootState;
export type AppDispatch = ThunkDispatch<IRootState, undefined, AnyAction>;

const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch<AppDispatch>();

const { tryDispatch } = store;
export { store, tryDispatch, useSelector, useDispatch };
