import { AppRoute, AuthorizationStatus } from '@/const';
import { useAppSelector } from '@/hooks';
import { getAuthorizationStatus } from '@/store/user/user.selectors';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children }: PrivateRouteProps = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
