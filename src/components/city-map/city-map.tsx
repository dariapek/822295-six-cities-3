import { FirstElementIndex, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '@/const';
import useMap from '@/hooks/useMap';
import { OfferListItem } from '@/types/offer';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type CityMapProps = {
  blockName: 'cities' | 'offer';
  cityOffersList: Array<OfferListItem>;
  selectedOffer?: OfferListItem | undefined;
}

const size = {
  cities: { width: '512px', height: '100%' },
  offer: { width: '100%', height: '579px' },
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});


const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function CityMap({ blockName, cityOffersList, selectedOffer }: CityMapProps): JSX.Element {
  const placeClass: string = `${blockName}__map`;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityOffersList[FirstElementIndex].city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityOffersList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffersList, selectedOffer]);


  return (
    <div className="cities__right-section">
      <section
        className={clsx(placeClass, 'map')}
        ref={mapRef}
        style={{ height: size[blockName].height, width: size[blockName].width }}
      >
      </section>
    </div>
  );
}

export default CityMap;
