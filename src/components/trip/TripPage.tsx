import React from "react";

import { useLocation } from "react-router-dom";
import MapContainer from "./map/MapContainer";

const TripPage = () => {
  const location = useLocation();
  const searchText = location.state?.searchText || "";

  return (
    <div>
      <h1>전달받은 값: {searchText}</h1>
      <MapContainer />
    </div>
  );
};

export default TripPage;
