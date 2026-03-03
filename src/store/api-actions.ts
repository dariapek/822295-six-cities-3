import { AuthorizationStatus, TimeoutShowError } from '@/const';
import { OfferListItem } from '@/types/offer';
import { AppDispatch, State } from '@/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  loadOffers,
  loadOffersError,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  setUserData,
} from './actions';
import { store } from './';
import { AuthData } from '@/types/auth-data';
import { dropToken, saveToken } from '@/services/token';
import { UserData } from '@/types/user-data';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TimeoutShowError,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setOffersDataLoadingStatus(true));

      try {
        const { data } = await api.get<OfferListItem[]>('/offers');

        dispatch(setOffersDataLoadingStatus(false));
        dispatch(loadOffers(data));
        dispatch(loadOffersError(null));
      } catch {
        dispatch(loadOffersError('Failed to load offers. Please try again later.'));
      }
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get('/login');

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>('/login', { email, password });

    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/logout');

    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
