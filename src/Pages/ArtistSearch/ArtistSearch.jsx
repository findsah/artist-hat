import React, {useState, useEffect} from "react";
import Map from "../../Components/map/Map";
import "./ArtistSearch.css";
import ArtistCard from "./SubComponents/ArtistCard";
import FilterDropdown from "./SubComponents/FilterDropdown";

const ArtistSearch = () => {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setLat(latitude);
          setLng(longitude);
      });
  }, [])
  console.log(lat,lng, ' these are locations')
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container-fluid artistSearch">
      <div className="row">
        <div className="col-12 col-md-5 artistSearchCardlist">
        <FilterDropdown />
          {arr.map((item) => (
            <div key={item} style={{ marginBottom: "40px" }}>
              <ArtistCard />
            </div>
          ))}
          <button className="seeMore">see more artist</button>
        </div>
        <div className="col-12 col-md-7">
        <Map lats={lat} lngs={lng} 
                />
        </div>
      </div>
      </div>
  );
};

export default ArtistSearch;
