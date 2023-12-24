import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import MapContainer from "./map/MapContainer";
import SearchBarInPage from "./SearchBarInPage";

const TripPage = () => {
  const location = useLocation();
  const [state, setState] = useState<string>("");
  if (location.state === undefined) {
    setState(location.state.searchText);
  }

  const handleState = (data: string) => {
    console.log("handleState in TripPage");
    console.log(data);
    setState(data);
  };
  return (
    <div>
      <SearchBarInPage searchText={state} handleState={handleState} />
      <MapContainer searchText={state} />
    </div>
  );
};

export default TripPage;
