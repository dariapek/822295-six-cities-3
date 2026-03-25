import { NameSpace } from '@/const';
import { State } from '@/types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State) => state[NameSpace.User].userData;
export const getUserComments = (state: State) => state[NameSpace.User].userComments;
