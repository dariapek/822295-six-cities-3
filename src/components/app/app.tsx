import SearchPage from '../../pages/search-page';
import { PlaceCardInfo } from '../../components/place-card/place-card.types';

type AppScreenProps = {
  cardCount: number;
  placeCardInfo: PlaceCardInfo;
}

function App({cardCount, placeCardInfo}: AppScreenProps): JSX.Element {
  return (
    <SearchPage
      cardCount={cardCount}
      placeCardInfo={placeCardInfo}
    />
  );
}

export default App;
