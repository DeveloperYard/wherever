import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapContainerProps {
  searchText: string;
}

const MapContainer: React.FunctionComponent<MapContainerProps> = ({
  searchText,
}) => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  console.log(searchText);
  return (
    <div className="MapContainer">
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
};

export default MapContainer;
