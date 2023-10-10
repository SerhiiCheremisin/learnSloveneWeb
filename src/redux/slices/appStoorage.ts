import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceInitial } from "../../utils/types";

const initialState: IUserSliceInitial = {
   isUserLogged : false,
   userName: '',
   userDictionary: [],
   appLang: "UA"
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
          },
          setAppLanguage (state, action) {
            state.appLang = action.payload;
          }
        }
})

export const { setUserName, setUserLoginStatus, setUserDictionary, setAppLanguage } = appStoorage.actions;

export default appStoorage.reducer;