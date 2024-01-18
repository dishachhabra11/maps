import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { markerData } from './connectivity/markerData';
import Sidebar from './SideBar/SideBar';

const mapContainerStyle = {
  width: '85vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  right: 0,
};

const center = {
  lat: 22.7196,
  lng: 75.8577,
};

const getMarkerColor = (marker,filter) => {
  const unpaidTaxes = [marker['Garbage Tax'], marker['Property Tax'], marker['Water Tax']].filter(
    (tax) => tax === 'Unpaid'
  );

  if(filter==='all'){
    if(unpaidTaxes.length === 3) {
      return 'red';
    } else if (unpaidTaxes.length === 2) {
      return 'orange';
    } else if (unpaidTaxes.length === 1) {
      return 'yellow';
    } else {
      return 'green';
    }
   }

  if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Unpaid') {
    return 'red';
  } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Unpaid') {
    return 'red';
  } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Unpaid') {
    return 'red';
  }
  else if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Paid') {
    return 'green';
  } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Paid') {
    return 'green';
  } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Paid') {
    return 'green';
  }
   
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const filteredMarkers = (marker) => {
    switch (filter) {
      case 'unpaidWaterTax':
        return markerData.filter((marker) => marker['Water Tax'] === 'Unpaid');
      case 'unpaidPropertyTax':
        return markerData.filter((marker) => marker['Property Tax'] === 'Unpaid');
      case 'unpaidGarbageTax':
        return markerData.filter((marker) => marker['Garbage Tax'] === 'Unpaid');
      default:
        return markerData;
    }
  };


  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <Sidebar onFilterChange={(newFilter) => setFilter(newFilter)} />
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
        {markerData.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) }}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker,filter)}-dot.png`,
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
              <div>
                <b>Name: {selectedMarker.Name}</b>
              </div>
              <div>
                <b>Address: {selectedMarker.Address}</b>
              </div>
              <div>
                <b>Property Tax: {selectedMarker['Property Tax']}</b>
              </div>
              <div>
                <b>Water Tax: {selectedMarker['Water Tax']}</b>
              </div>
              <div>
                <b>Garbage Tax: {selectedMarker['Garbage Tax']}</b>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;




