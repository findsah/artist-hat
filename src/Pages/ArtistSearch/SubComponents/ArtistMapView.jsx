import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ArtistMapView = () => {
  const [center] = useState({
    lat: 59.95,
    lng: 30.33,
  });
  const [zoom] = useState(11);

  return (
    <div style={{ height: "100rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys="AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw"
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default ArtistMapView;
