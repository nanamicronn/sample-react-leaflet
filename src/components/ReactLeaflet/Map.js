import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.css';

export const Map = () => {
  const position = [51.505, -0.09];
  const zoom = 13;
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
};
