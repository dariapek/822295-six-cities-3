export enum AppRoute {
  Root = '/',
  City = '/city/:city',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const LocationNames = [
  'paris',
  'cologne',
  'brussels',
  'amsterdam',
  'hamburg',
  'dusseldorf',
] as const;

export type LocationName = typeof LocationNames[number];

export const URL_MARKER_DEFAULT = '../../markup/img/pin.svg';
export const URL_MARKER_CURRENT = '../../markup/img/pin-active.svg';

export const FirstElementIndex = 0;
