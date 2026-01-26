import PrivateRoute from '@/components/private-route/private-route';
import { AppRoute, AuthorizationStatus, FirstElementIndex, LocationNames } from '@/const';
import { OffersMock } from '@/mock/offers.mock';
import FavoritesPage from '@/pages/favorites-page';
import LoginPage from '@/pages/login-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page';
import MainPage from '@/pages/main-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <Navigate to={`/city/${LocationNames[FirstElementIndex]}`} replace />,
  },
  {
    path: AppRoute.City,
    element: <MainPage offers={OffersMock} />,
  },
  {
    path: AppRoute.Offer,
    element: <OfferPage offers={OffersMock} />,
  },
  {
    path: AppRoute.Favorites,
    element: (
      <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
        <FavoritesPage offers={OffersMock} />
      </PrivateRoute>
    ),
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.NotFound,
    element: <NotFoundPage />,
  },
]);
