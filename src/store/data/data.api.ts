import { OfferListItem } from '@/types/offer';
import { ThunkOptions } from '@/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOffersAction = createAsyncThunk<
  Array<OfferListItem>,
  undefined,
  ThunkOptions
>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferListItem[]>('/offers');

    return data;
  },
);
