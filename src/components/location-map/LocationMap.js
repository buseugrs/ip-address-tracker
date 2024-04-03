import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IPContext } from '../../context/ip-context/IPContext';
import { Icon } from 'leaflet';

const LocationMap = () => {
  const { data } = useContext(IPContext);
  const [loaded, setLoaded] = useState(false); // Initial state of map loading

  let position = [[51.505, -0.09]];

  if (data && data.loc) {
    const splitCoordinates = data.loc.split(',');
    const lat = parseFloat(splitCoordinates[0]);
    const lng = parseFloat(splitCoordinates[1]);
    position = [lat, lng];
  } else {
    position = [[51.505, -0.09]];
  }

  console.log(position);

  const markerIcon = new Icon({
    iconUrl: require('../../assets/images/marker-icon.png'),
    iconSize: [50, 50],
  });

  useEffect(() => {
    if (data) {
      setLoaded(true); // Update state of map loading true when data is received
    }
  }, [data]);

  return (
    <div className={`location-map ${loaded ? 'loaded' : ''}`}>
      <MapContainer
        dragging={false}
        key={`${position[0]}-${position[1]}`}
        center={position}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={markerIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
