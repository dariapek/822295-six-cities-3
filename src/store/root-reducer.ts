import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { userProcess } from './user/user.slice';
import { offersData } from './data/data.slice';
import { appActions } from './app/app.slice';


export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appActions.reducer,
});
