import React, { createContext, useState } from 'react';
import axios from 'axios';

export const IPContext = createContext();

const IPProvider = ({ children }) => {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_I6dPAQagAdidJp0hosUB1e00rLhYL&ipAddress=${ip}`
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <IPContext.Provider value={{ ip, setIp, data, fetchData }}>{children}</IPContext.Provider>;
};

export default IPProvider;
