import { NameSpace } from '@/const';
import { OfferListItem } from '@/types/offer';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction } from './data.api';

type OffersData = {
  offers: Array<OfferListItem>;
  isOffersDataLoading: boolean;
  loadOffersError: string | null;
};

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  loadOffersError: null,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.loadOffersError = null;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loadOffersError = 'Failed to load offers. Please try again later.';
        state.isOffersDataLoading = false;
      });
  }
});
