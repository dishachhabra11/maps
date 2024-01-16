import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import markersData from './data';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
    lat: 22.7196,
    lng: 75.8577,
  };
  
  
  const getMarkerColor = (marker) => {
    const unpaidTaxes = [marker.garbage_tax, marker.water_tax, marker.property_tax].filter((tax) => tax==="unpaid");
  
    if (unpaidTaxes.length === 3) {
      return 'red';
    } else if (unpaidTaxes.length === 2) {
      return 'orange';
    } else if (unpaidTaxes.length === 1) {
      return 'yellow';
    } else {
      return 'green';
    }
  };





const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
    libraries,
  });

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

{markersData.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={`Marker ${marker.id}`}
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

