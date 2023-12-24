import React, { useEffect, useState } from "react";

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
  console.log("useeffect in MapContainer!");
  console.log(searchText);
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchText, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 좌표를 기준으로 지도 범위를 재설정하기 위해
            // LatLngBounds 객체에 좌표를 추가합니다.

            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            return;
          } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
          }
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place: any) {
          // 마커를 생성하고 지도에 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>"
            );
            infowindow.open(map, marker);
          });
        }
        // 여기 아래는 custom overlay!
        // const content = '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';
        // const position = new kakao.maps.LatLng(33.450701, 126.570667);
        // const custumOverlay = new kakao.maps.CustomOverlay({
        //   position: position,
        //   content: content,
        // });

        // custumOverlay.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [searchText]);

  console.log(searchText);
  return (
    <div className="MapContainer">
      <div id="map" style={{ width: "500px", height: "500px" }} />
    </div>
  );
};

export default MapContainer;
