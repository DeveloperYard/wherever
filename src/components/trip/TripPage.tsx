import React from 'react';

import { useLocation } from 'react-router-dom';
import KakaoMap from './map/KakaoMap';

const TripPage = () => {
  const location = useLocation();
  const searchText = location.state?.searchText || '';

  return (
    <div>
      <h1>전달받은 값: {searchText}</h1>
      <KakaoMap/>
    </div>
  );
};

export default TripPage;
