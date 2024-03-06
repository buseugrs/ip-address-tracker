import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchIP from '../../components/search-bar/SearchIP';
import LocationMap from '../../components/search-bar/location-map/LocationMap';

export const IPContext = createContext();

const IPProvider = ({ children }) => {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_I6dPAQagAdidJp0hosUB1e00rLhYL&ipAddress=${ip}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (ip) {
      fetchData();
    }
  }, [ip]);

  // check if data is exist
  if (!data) {
    return (
      <IPContext.Provider value={{ ip, setIp, data }}>
        {children}
        <SearchIP />
      </IPContext.Provider>
    );
  }

  return (
    <IPContext.Provider value={{ ip, setIp, data }}>
      {children}
      <SearchIP />
      <LocationMap />
    </IPContext.Provider>
  );
};

export default IPProvider;
