import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/router';
import { useAppSelector } from './hooks';
import FullPageLoading from './components/full-page-loading/full-page-loading';
import FullPageError from './components/full-page-error/full-page-error';
import { getIsOffersDataLoading, getLoadOffersError } from './store/data/data.selectors';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const offersDataError = useAppSelector(getLoadOffersError);

  if ((offersDataError) !== null) {
    return <FullPageError />;
  }

  if (isOffersDataLoading) {
    return <FullPageLoading />;
  }

  return <RouterProvider router={router} />;
}

export default App;
