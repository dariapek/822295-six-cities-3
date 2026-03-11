import { NameSpace } from '@/const';
import { State } from '@/types/state';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Data].isOffersDataLoading;
export const getLoadOffersError = (state: State) => state[NameSpace.Data].loadOffersError;
