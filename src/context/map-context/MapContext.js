import React, { createContext, useState } from 'react';
import axios from 'axios';

export const MapContext = createContext();

const MapProvider = ({ children }) => {
  

  return <MapContext.Provider value={{}}>{children}</MapContext.Provider>;
};

export default MapProvider;
