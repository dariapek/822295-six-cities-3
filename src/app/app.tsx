import Layout from '../components/layout/layout';
import PrivateRoute from '../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../const';
import { FavoritesPage } from '../pages/favorites-page';
import { LoginPage } from '../pages/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { OfferPage } from '../pages/offer-page';
import SearchPage from '../pages/search-page';
import { Offer } from '../types/offer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type AppScreenProps = {
  offers: Array<Offer>;
}

function App({ offers }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            path={AppRoute.Root}
            element={<SearchPage offers={offers} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Route>
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
