import { PLACE_TYPE } from '../components/place-card/place-card.types';
import { PlaceCardInfo } from '../components/place-card/place-card.types';


export const placeCardMock: PlaceCardInfo = {
  'amsterdam': [
    {
      id: 1,
      description: 'Beautiful & luxurious apartment at great location',
      cost: 120,
      rating: 80,
      type: PLACE_TYPE.APARTMENT,
      img: 'img/apartment-01.jpg',
    },
    {
      id: 2,
      description: 'Wood and stone place',
      cost: 80,
      rating: 80,
      type: PLACE_TYPE.ROOM,
      img: 'img/apartment-02.jpg',
    },
    {
      id: 3,
      description: 'Canal View Prinsengracht',
      cost: 132,
      rating: 80,
      type: PLACE_TYPE.APARTMENT,
      img: 'img/apartment-03.jpg',
    },
    {
      id: 4,
      description: 'Nice, cozy, warm big bed apartment',
      cost: 180,
      rating: 100,
      type: PLACE_TYPE.APARTMENT,
      img: 'img/apartment-02.jpg',
    },
    {
      id: 5,
      description: 'Nice, cozy, warm big bed apartment',
      cost: 80,
      rating: 80,
      type: PLACE_TYPE.ROOM,
      img: 'img/apartment-01.jpg',
    },
  ]
};
