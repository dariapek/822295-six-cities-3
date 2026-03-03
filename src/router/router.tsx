import PrivateRoute from '@/components/private-route/private-route';
import { AppRoute, FirstElementIndex, LocationNames } from '@/const';
import FavoritesPage from '@/pages/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
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
    element: <MainPage />,
  },
  {
    path: AppRoute.Offer,
    element: <OfferPage />,
  },
  {
    path: AppRoute.Favorites,
    element: (
      <PrivateRoute>
        <FavoritesPage />
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
