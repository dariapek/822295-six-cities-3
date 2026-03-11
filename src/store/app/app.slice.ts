import { LocationName, NameSpace, SortingOption } from '@/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppActions = {
  currentCity: LocationName;
  sortingOption: SortingOption;
}

const initialState: AppActions = {
  currentCity: LocationName.Paris,
  sortingOption: SortingOption.Popular,
};

export const appActions = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<LocationName>) => {
      state.currentCity = action.payload;
    },
    changeSortingOption: (state, action: PayloadAction<SortingOption>) => {
      state.sortingOption = action.payload;
    },
  },
});

export const { changeCurrentCity, changeSortingOption } = appActions.actions;
