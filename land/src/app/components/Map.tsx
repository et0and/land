"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapIcon from "./MapIcon";
import Image from "next/image";

type Location = {
  id?: string;
  name?: string;
  lat: number;
  lng: number;
  audioSrc?: string;
  videoSrc?: string;
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
        center={[-38.944991, 176.090999]}
        zoom={7}
        style={{ height: "100vh", width: "100%" }}
        minZoom={4}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup className="custom-popup" closeButton={false}>
              <div>
                <h1 className="font-medium text-lg">{location.name}</h1>
                {location.imageSrc && (
                  <div className="mb-2">
                    <Image
                      src={location.imageSrc}
                      alt={location.imageAlt || location.name}
                      width={300}
                      height={150}
                      objectFit="cover"
                    />
                  </div>
                )}
                {location.description && (
                  <p className="text-sm">{location.description}</p>
                )}
                {location.audioSrc && (
                  <audio controls src={location.audioSrc} />
                )}
                {location.videoSrc && (
                  <video controls width={300} className="p-2">
                    <source src={location.videoSrc} type="video/mp4" />
                  </video>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
