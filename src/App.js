import React from 'react';
import SearchIP from './components/search-bar/SearchIP';
import LocationMap from './components/search-bar/location-map/LocationMap';
import IPProvider from './context/ip-context/IPContext';

import './App.scss';

function App() {
  return (
    <IPProvider>
      <SearchIP />
      <LocationMap/>
    </IPProvider>
  );
}

export default App;
