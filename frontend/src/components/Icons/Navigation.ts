import L from 'leaflet';

import marker from './navigation.svg'

export const NavigationIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconSize: [64,64],
  iconAnchor: [32, 64],
});
