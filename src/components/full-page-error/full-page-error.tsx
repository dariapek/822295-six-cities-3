import { useAppDispatch } from '@/hooks';
import './full-page-error.css';
import { fetchOffersAction } from '@/store/data/data.api';

function FullPageError(): JSX.Element {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(fetchOffersAction());
  };

  return (
    <div className="error-wrapper">
      <div className="city-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1>We can’t load offers right now</h1>
      <p className="error-text">
        Something went wrong and six-cities is currently unavailable.
        Please try again a little later.
      </p>

      <button
        onClick={clickHandler}
        className="retry-button"
      >
        Try again
      </button>
    </div>
  );
}

export default FullPageError;
