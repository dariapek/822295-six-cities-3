import { NameSpace } from '@/const';
import { State } from '@/types/state';

export const getCurrentCity = (state: State) => state[NameSpace.App].currentCity;
export const getSortingOption = (state: State) => state[NameSpace.App].sortingOption;

