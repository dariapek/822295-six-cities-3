import Layout from '../components/layout/layout';
import PrivateRoute from '../components/private-route/private-route';
import { APP_ROUTE, AUTHORIZATION_STATUS } from '../const';
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
          path={APP_ROUTE.ROOT}
          element={<Layout />}
        >
          <Route
            path={APP_ROUTE.ROOT}
            element={<SearchPage offers={offers} />}
          />
          <Route
            path={APP_ROUTE.OFFER}
            element={<OfferPage />}
          />
          <Route
            path={APP_ROUTE.FAVORITE}
            element={
              <PrivateRoute
                authorizationStatus={AUTHORIZATION_STATUS.NO_AUTH}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_ROUTE.NOT_FOUND}
            element={<NotFoundPage />}
          />
        </Route>
        <Route
          path={APP_ROUTE.LOGIN}
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
