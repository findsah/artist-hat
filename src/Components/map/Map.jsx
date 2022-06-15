import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import {  useSelector } from "react-redux";

const Map = compose(
  withProps({
    googleMapURL: "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ setLocations }) => {

  const userData = useSelector((state) => state.ArtistData.value);
  const defaultLocs = useSelector((state) => state.ArtistData.map);
  const [markersLoc, setMarkersLoc] = useState()

  useEffect(() => {
    setMarkersLoc(userData.location !== null ? userData?.location : [])
  }, [userData])

  

  const handleMapClick = (e) => {

    setMarkersLoc([...markersLoc, {
      lat: parseFloat(e.latLng.lat()),
      lng: parseFloat(e.latLng.lng())
    }])
    setLocations([...markersLoc, {
      lat: parseFloat(e.latLng.lat()),
      lng: parseFloat(e.latLng.lng())
    }])

  }

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: defaultLocs?.lats, lng: defaultLocs?.lngs }}
      onClick={handleMapClick}
    >
      {
        markersLoc !== {} && markersLoc?.map((markerloc, index) => (
          <Marker
            key={index}
            position={{ lat: markerloc ? Number(markerloc.lat) : defaultLocs?.lats, lng: markerloc ? Number(markerloc.lng) : defaultLocs?.lngs }}
          />
        ))
      }
    </GoogleMap>
  )
}

)

export default Map;