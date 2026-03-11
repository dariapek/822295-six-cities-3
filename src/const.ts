export const FirstElementIndex = 0;
export const TimeoutShowError = 2000;

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

export enum LocationName {
  Paris = 'paris',
  Cologne = 'cologne',
  Brussels = 'brussels',
  Amsterdam = 'amsterdam',
  Hamburg = 'hamburg',
  Dusseldorf = 'dusseldorf',
}
export const LocationNames = Object.values(LocationName) as LocationName[];

export const UrlMarkerDefault = './img/pin.svg';
export const UrlMarkerCurrent = './img/pin-active.svg';

export enum SortingOption {
  Popular = 'Popular',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  TopRatedFirst = 'TopRatedFirst',
}
export const SortingOptions = Object.values(SortingOption) as SortingOption[];
export const SortingOptionL10n = {
  [SortingOption.Popular]: 'Popular',
  [SortingOption.PriceHighToLow]: 'Price: low to high',
  [SortingOption.PriceLowToHigh]: 'Price: high to low',
  [SortingOption.TopRatedFirst]: 'Top rated first'
};

export enum NameSpace {
  App = 'APP',
  Data = 'DATA',
  User = 'USER',
}
