import { AuthorizationStatus, NameSpace } from '@/const';
import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/types/user-data';
import { checkAuthAction, fetchUserCommentsAction, loginAction, logoutAction, submitUserCommentAction } from './user.api';
import { UserComment } from '@/types/offer';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  userComments: Array<UserComment>;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  userComments: [],
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
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
