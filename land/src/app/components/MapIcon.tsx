'use client'

import L from 'leaflet';
import { useEffect } from 'react';

const MapIcon = () => {
  useEffect(() => {
    (async function init() {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png',
      });
    })();
  }, []);

  return null;
};

export default MapIcon;