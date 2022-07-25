import React, { useEffect } from 'react';
import './App.css';
import {Location} from './components/Location.js';

export default function App(){

    const [locationData, setLocationData] = React.useState({})

      useEffect(() => {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => response.json())
      .then((data) => setLocationData(data));
      }, []);

  return (
    <div>
      <Location 
        lat={locationData.latitude}
        long={locationData.longitude}
      />
    </div>
  );
}
