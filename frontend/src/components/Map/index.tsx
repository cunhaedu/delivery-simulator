import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Position } from '../../interfaces/Route';
import { NavigationIcon } from '../Icons/Navigation';

type MapProps = {
  center: Position;
  zoom: number;
}

const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_API_KEY;

export function Map ({ center, zoom }: MapProps) {
  function SetViewOnClick({ coords }: { coords: Position }) {
    const map = useMap();
    map.setView([coords.lat, coords.lng]);

    return null;
  }

  return (
    <MapContainer
      // ref={mapRef}
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url={`https://api.mapbox.com/styles/v1/cunhaedu/cl9lreek3000b14pfbpnpzrmq/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_KEY}`}
      />
      <Marker
        position={[center.lat, center.lng]}
        icon={NavigationIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <SetViewOnClick coords={center} />
    </MapContainer>
  );
}
