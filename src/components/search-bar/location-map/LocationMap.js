import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IPContext } from '../../../context/ip-context/IPContext';

const LocationMap = () => {
  const { data } = useContext(IPContext);

  let position = [[51.505, -0.09]];

  if (data && data.location) {
    position = [data.location.lat, data.location.lng];
  } else {
    position = [[51.505, -0.09]];
  }

  console.log(position);

  return (
    <div className='location-map'>
      <MapContainer key={`${position[0]}-${position[1]}`} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
