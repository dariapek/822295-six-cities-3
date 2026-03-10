import { AppRoute, AuthorizationStatus } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logoutAction } from '@/store/user/user.api';
import { getAuthorizationStatus, getUserData } from '@/store/user/user.selectors';
import { Link } from 'react-router-dom';

function User(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserData)?.email;

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <>
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" onClick={handleLogout} to={AppRoute.Login}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    );
  }
}

export default User;
