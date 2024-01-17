import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
    lat: 22.7196,
    lng: 75.8577,
  };
  const markers = [
    { id: 1, lat: 22.7254, lng: 75.8655, title: 'Marker 1' },
    { id: 2, lat: 22.7293, lng: 75.8731, title: 'Marker 2' },
    { id: 3, lat: 22.7265, lng: 75.8828, title: 'Marker 3' },
    { id: 4, lat: 22.7336, lng: 75.8709, title: 'Marker 4' },
    { id: 5, lat: 22.7311, lng: 75.8678, title: 'Marker 5' },
    { id: 6, lat: 22.7239, lng: 75.8564, title: 'Marker 6' },
    { id: 7, lat: 22.7282, lng: 75.8797, title: 'Marker 7' },
    { id: 8, lat: 22.7259, lng: 75.8617, title: 'Marker 8' },
    { id: 9, lat: 22.7378, lng: 75.8749, title: 'Marker 9' },
    { id: 10, lat: 22.7247, lng: 75.8683, title: 'Marker 10' },
    { id: 11, lat: 22.7345, lng: 75.8589, title: 'Marker 11' },
    { id: 12, lat: 22.7363, lng: 75.8635, title: 'Marker 12' },
    { id: 13, lat: 22.7287, lng: 75.8783, title: 'Marker 13' },
    { id: 14, lat: 22.7324, lng: 75.8532, title: 'Marker 14' },
    { id: 15, lat: 22.7278, lng: 75.8657, title: 'Marker 15' },
    { id: 16, lat: 22.7306, lng: 75.8621, title: 'Marker 16' },
    { id: 17, lat: 22.7261, lng: 75.8776, title: 'Marker 17' },
    { id: 18, lat: 22.7340, lng: 75.8699, title: 'Marker 18' },
    { id: 19, lat: 22.7213, lng: 75.8743, title: 'Marker 19' },
    { id: 20, lat: 22.7370, lng: 75.8646, title: 'Marker 20' },
    { id: 21, lat: 22.7200, lng: 75.8600, title: 'Marker 21' },
  { id: 22, lat: 22.7330, lng: 75.8750, title: 'Marker 22' },
  { id: 23, lat: 22.7275, lng: 75.8700, title: 'Marker 23' },
  { id: 24, lat: 22.7390, lng: 75.8825, title: 'Marker 24' },
  { id: 25, lat: 22.7215, lng: 75.8550, title: 'Marker 25' },
  { id: 26, lat: 22.7385, lng: 75.8650, title: 'Marker 26' },
  { id: 27, lat: 22.7250, lng: 75.8775, title: 'Marker 27' },
  { id: 28, lat: 22.7315, lng: 75.8625, title: 'Marker 28' },
  { id: 29, lat: 22.7230, lng: 75.8755, title: 'Marker 29' },
  { id: 30, lat: 22.7355, lng: 75.8675, title: 'Marker 30' },
  { id: 31, lat: 22.7280, lng: 75.8630, title: 'Marker 31' },
  { id: 32, lat: 22.7345, lng: 75.8790, title: 'Marker 32' },
 
    // Add more markers as needed
  ];


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
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;

