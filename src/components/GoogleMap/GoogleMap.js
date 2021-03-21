import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './GoogleMap.scss';

const GoogleMap = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyA9UqR1_L-_3OhMGPaGfvJj5i46GSvUsq0',
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMapMarkerAlt />
    <p className="pin-text">{text}</p>
  </div>
);

export default GoogleMap;
