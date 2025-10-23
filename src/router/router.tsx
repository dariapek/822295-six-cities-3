import Layout from '@/components/layout/layout';
import PrivateRoute from '@/components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '@/const';
import { OffersMock } from '@/mock/place-card.mock';
import { FavoritesPage } from '@/pages/favorites-page';
import { LoginPage } from '@/pages/login-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import { OfferPage } from '@/pages/offer-page';
import SearchPage from '@/pages/search-page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <Layout />,
    children: [
      {
        path: AppRoute.Root,
        element: <SearchPage offers={OffersMock} />,
      },
      {
        path: AppRoute.Offer,
        element: <OfferPage />,
      },
      {
        path: AppRoute.Favorites,
        element: (
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: AppRoute.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  }
]);
