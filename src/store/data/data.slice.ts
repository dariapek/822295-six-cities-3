import { NameSpace } from '@/const';
import { Offer, OfferListItem } from '@/types/offer';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction } from './data.api';

type OffersData = {
  offers: Array<OfferListItem>;
  isOffersDataLoading: boolean;
  loadOffersError: string | null;

  currentOffer: Offer | null;
  isCurrentOfferLoading: boolean;
  loadCurrentOfferError: string | null;
  isOfferPageNotFound: boolean;
  isNearbyOffersLoading: boolean;

  nearbyOffers: Array<OfferListItem>;
};

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  loadOffersError: null,

  currentOffer: null,
  isCurrentOfferLoading: false,
  loadCurrentOfferError: null,
  isOfferPageNotFound: false,
  isNearbyOffersLoading: false,

  nearbyOffers: [],
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
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
        state.isOfferPageNotFound = false;

        state.loadCurrentOfferError = null;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isCurrentOfferLoading = false;
        state.isOfferPageNotFound = false;

        state.loadCurrentOfferError = null;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state, action) => {
        state.loadCurrentOfferError = action.error.message || 'Failed to load  offer';

        state.isCurrentOfferLoading = false;
        state.isOfferPageNotFound = action.payload === 404;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersLoading = false;
      });
  }
});
