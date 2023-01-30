import { createSlice } from "@reduxjs/toolkit";
import ApiService from "../../services/ApiService";


export type IState = {
  error: boolean;
  isLoading: boolean;
  user: any;
};

const initialState: IState = {
  error: false,
  isLoading: false,
  user: undefined,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUserProfile(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function getUserProfile() {
  return async (dispatch: any) => {
    try {
      dispatch(slice.actions.startLoading());
      const objUser = await ApiService.getUserProfile();
 
      dispatch(slice.actions.setUserProfile(objUser));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
