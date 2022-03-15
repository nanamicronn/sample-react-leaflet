import React, { useEffect } from 'react';
import './Map.css';
import L from 'leaflet'

export const Map = () => {
  useEffect(() => {
    const position = [51.505, -0.09];
    const zoom = 13;
    L.map('map', {
      center: position,
      zoom: zoom,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ]
    })
  }, [])

  return <div id="map"/>
};
