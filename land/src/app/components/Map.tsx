'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapIcon from './MapIcon';
import Image from 'next/image';

type Location = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  audioSrc: string;
  imageSrc?: string; // Optional image source
  imageAlt?: string; // Optional image alt text
  description?: string; // Optional description, if needed
};

type MapProps = {
  locations: Location[];
};

const Map: React.FC<MapProps> = ({ locations }) => {
  return (
    <>
      <MapIcon />
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | <a href="https://tom.so">Tom Hackshaw</a>'
        />
        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup 
              className="custom-popup"
              closeButton={false}
            >
              <div>
                <h1 className="font-medium text-lg pb-4">{location.name}</h1>
                {location.imageSrc && (
                  <div className="mb-2">
                    <Image
                      src={location.imageSrc}
                      alt={location.imageAlt || location.name}
                      width={200}
                      height={150}
                      objectFit="cover"
                    />
                  </div>
                )}
                {location.description && (
                <p className="text-sm">{location.description}</p>)}
                <audio controls src={location.audioSrc} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;