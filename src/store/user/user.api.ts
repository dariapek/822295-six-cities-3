import { saveToken, dropToken } from '@/services/token';
import { AuthData } from '@/types/auth-data';
import { UserComment } from '@/types/offer';
import { ReviewFormData } from '@/types/review';
import { ThunkOptions } from '@/types/state';
import { UserData } from '@/types/user-data';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  ThunkOptions
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>('/login');

    return data;
  },
);

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  ThunkOptions
>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>('/login', { email, password });

    saveToken(data.token);

    return data;
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkOptions
>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete('/logout');

    dropToken();
  },
);

export const fetchUserCommentsAction = createAsyncThunk<
  UserComment[],
  string,
  ThunkOptions
>(
  'user/fetchUserComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<UserComment[]>(`/comments/${offerId}`);

    return data;
  },
);

export const submitUserCommentAction = createAsyncThunk<
  UserComment,
  ReviewFormData & { offerId: string },
  ThunkOptions
>(
  'data/submitUserComment',
  async ({ offerId, comment, rating }, { extra: api, dispatch }) => {
    const { data } = await api.post<UserComment>(`/comments/${offerId}`, {
      comment,
      rating,
    });

    dispatch(fetchUserCommentsAction(offerId));

    return data;
  },
);
