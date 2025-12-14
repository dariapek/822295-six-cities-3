import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/header/header';
import { AppRoute } from '@/const';

const ExtraPageClassname = {
  [AppRoute.Root]: 'page--gray page--main',
  // [AppRoute.Favorites]: 'page--favorites-empty'
} as const;

function getExtraPageClassname(location: string): string {
  if (!(location in ExtraPageClassname)) {
    return '';
  }

  return ExtraPageClassname[location as keyof typeof ExtraPageClassname];
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
