import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchIP from '../../components/search-bar/SearchIP';
import LocationMap from '../../components/location-map/LocationMap';

export const IPContext = createContext();

const IPProvider = ({ children }) => {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(null);

  // To get current IP
  useEffect(() => {
    const fetchCurrentIP = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org/?format=json`);
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    fetchCurrentIP();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ip}?token=e0ee8327772667`);
      const splitCoordinates = response.data.loc.split(',');
      const ipData = {
        ip: ip,
        location: {
          lat: parseFloat(splitCoordinates[0]),
          lng: parseFloat(splitCoordinates[1]),
          region: response.data.region,
          country: response.data.country,
          timezone: response.data.timezone,
        },
        isp: response.data.org,
      };
      setData(ipData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (ip) {
      fetchData();
    }
  }, [ip]);

  // Return IPContext.Provider with appropriate values
  return (
    <IPContext.Provider value={{ ip, setIp, data, fetchData }}>
      {children}
      <SearchIP />
      {data && <LocationMap />}
    </IPContext.Provider>
  );
};

export default IPProvider;
