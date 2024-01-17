// Map.js

import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { fetchDataFromFirebase } from './connectivity/server'; // Adjust the path based on your project structure
// import { markerData } from './connectivity/markerData';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 22.7196,
  lng: 75.8577,
};

const getMarkerColor = (marker) => {
  // ... your existing getMarkerColor function
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCGtelCTfPhpKoMPoOt6HcfaFt8xUcua4c',
  });

  const [firebaseData, setFirebaseData] = useState([]);

  useEffect(() => {
    // Fetch data using the function from server.js
    fetchDataFromFirebase((data) => {
      setFirebaseData(data);
    });
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {firebaseData.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) }}
            title={`Address ${marker.Address} ,lat ${marker.Latitude},lng ${marker.Longitude}`}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker)}-dot.png`,
              scaledSize: new window.google.maps.Size(20, 20),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
