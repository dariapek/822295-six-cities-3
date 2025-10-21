import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { APP_ROUTE } from '../../const';

const EXTRA_PAGE_CLASSNAME = {
  [APP_ROUTE.ROOT]: 'page--gray page--main',
  [APP_ROUTE.FAVORITE]: 'page--favorites-empty'
} as const;

function getExtraPageClassname(location: string): string {
  if (!(location in EXTRA_PAGE_CLASSNAME)) {
    return '';
  }

  return EXTRA_PAGE_CLASSNAME[location as keyof typeof EXTRA_PAGE_CLASSNAME];
}

function Layout(): JSX.Element {
  const location = useLocation().pathname;
  const extraClassname = getExtraPageClassname(location);

  return (
    <div className={`page ${extraClassname}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
