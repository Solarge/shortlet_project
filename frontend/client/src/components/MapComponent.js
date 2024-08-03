import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = { 
  lat: 6.586143,
  lng: 3.252412
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDZO6NzGwVbuLUMaj-yPKYAkxa4_81kIj4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);


