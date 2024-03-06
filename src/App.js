import React from 'react';
import SearchIP from './components/search-bar/SearchIP';
import LocationMap from './components/location-map/LocationMap';
import IPProvider from './context/ip-context/IPContext';

import './App.scss';

function App() {
  return <IPProvider></IPProvider>;
}

export default App;
