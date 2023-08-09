import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceInitial } from "../../utils/types";

const initialState: IUserSliceInitial = {
   isUserLogged : false,
   userName: '',
   userDictionary: []
}

const appStoorage = createSlice({
    name: "appStoorage",
    initialState: initialState,
    reducers: {
          setUserName (state, action)  {
            state.userName = action.payload;
          },
          setUserLoginStatus (state, action) {
            state.isUserLogged = action.payload;
          },
          setUserDictionary (state, action) {
            state.userDictionary = action.payload;   
          }
        }
})

export const { setUserName, setUserLoginStatus, setUserDictionary } = appStoorage.actions;

export default appStoorage.reducer;