import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { markerData } from './connectivity/markerData';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 22.7196,
  lng: 75.8577,
};

const getMarkerColor = (marker) => {
  const unpaidTaxes = [marker["Garbage Tax"], marker["Property Tax"], marker["Water Tax"]].filter((tax) => tax === "Unpaid");

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
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

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
        {markerData.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) }}
            // title={`Address ${marker.Address} ,lat ${marker.Latitude},lng ${marker.Longitude}`}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker)}-dot.png`,
              scaledSize: new window.google.maps.Size(20, 20),
            }}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: parseFloat(selectedMarker.Latitude), lng: parseFloat(selectedMarker.Longitude) }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
            <div><b>Name:{selectedMarker.Name}</b></div>
              <div><b>Address: {selectedMarker.Address}</b></div>
             
              
              <div><b>Property Tax:{selectedMarker["Property Tax"]}</b></div>
              <div><b>Water Tax:{selectedMarker["Water Tax"]}</b></div>
              <div><b>Water Tax:{selectedMarker["Garbage Tax"]}</b></div>
              
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;



