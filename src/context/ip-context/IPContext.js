import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SearchIP from '../../components/search-bar/SearchIP';
import LocationMap from '../../components/location-map/LocationMap';

export const IPContext = createContext();

const IPProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // To get current IP
  useEffect(() => {
    const fetchCurrentIP = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io/78.190.234.231?token=e0ee8327772667`);
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    fetchCurrentIP();
  }, []);

  // Return IPContext.Provider with appropriate values
  return (
    <IPContext.Provider value={{ data }}>
      {children}
      <SearchIP />
      {data && <LocationMap />}
    </IPContext.Provider>
  );
};

export default IPProvider;
