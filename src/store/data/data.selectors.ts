import { NameSpace } from '@/const';
import { State } from '@/types/state';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Data].isOffersDataLoading;
export const getLoadOffersError = (state: State) => state[NameSpace.Data].loadOffersError;

export const getCurrentOffer = (state: State) => state[NameSpace.Data].currentOffer;
export const getIsCurrentOfferLoading = (state: State) => state[NameSpace.Data].isCurrentOfferLoading;
export const getLoadCurrentOfferError = (state: State) => state[NameSpace.Data].loadCurrentOfferError;
export const getIsOfferPageNotFound = (state: State) => state[NameSpace.Data].isOfferPageNotFound;
export const getIsNearbyOffersLoading = (state: State) => state[NameSpace.Data].isNearbyOffersLoading;

export const getNearbyOffers = (state: State) => state[NameSpace.Data].nearbyOffers;
