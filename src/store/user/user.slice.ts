import { AuthorizationStatus, NameSpace } from '@/const';
import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/types/user-data';
import { checkAuthAction, loginAction, logoutAction } from './user.api';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;

      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
