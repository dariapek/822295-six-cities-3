import { AuthorizationStatus, LocationName, SortingOption } from '@/const';
import { OfferListItem } from '@/types/offer';
import { UserData } from '@/types/user-data';
import { createAction } from '@reduxjs/toolkit';

export const changeCurrentCity = createAction<LocationName>('city/changeCurrentCity');

export const changeSort = createAction<SortingOption>('app/changeSort');

export const loadOffers = createAction<Array<OfferListItem>>('data/loadOffers');
export const setError = createAction<string | null>('data/setError');
export const loadOffersError = createAction<string | null>('data/loadOffersError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserData = createAction<UserData>('user/setUserData');
