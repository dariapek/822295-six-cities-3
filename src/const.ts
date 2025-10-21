export enum APP_ROUTE {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITE = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*',
}

export enum AUTHORIZATION_STATUS {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}
