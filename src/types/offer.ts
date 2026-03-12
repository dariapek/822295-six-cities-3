export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface User {
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export interface OfferListItem {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export interface Offer extends OfferListItem {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type UserComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

