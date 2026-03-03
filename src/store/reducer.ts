import { createReducer } from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  changeSort,
  loadOffers,
  loadOffersError,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  setUserData,
} from './actions';
import { AuthorizationStatus, LocationName, SortingOption } from '@/const';
import { OfferListItem } from '@/types/offer';
import { UserData } from '@/types/user-data';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  currentCity: LocationName;
  offers: Array<OfferListItem>;
  sortingOption: SortingOption;
  isOffersDataLoading: boolean;
  error: string | null;
  loadOffersError: string | null;
  userData: UserData | null;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentCity: LocationName.Paris,
  offers: [],
  sortingOption: SortingOption.Popular,
  isOffersDataLoading: false,
  error: null,
  loadOffersError: null,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffersError, (state, action) => {
      state.loadOffersError = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
