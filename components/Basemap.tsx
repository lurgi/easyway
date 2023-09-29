"use client";

import curGeoStore from "@/lib/curGeoStore";
import directionStore from "@/lib/directionSotre";
import { useEffect } from "react";

const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID}`;

const BaseMap = () => {
  const { latitude, longitude, setLatitude, setLongitude } = curGeoStore(
    (state) => state
  );
  const { isDirectionLoad, directions } = directionStore((state) => state);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);

    let map;
    script.onload = () => {
      if (!directions) {
        map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(
            latitude || 37.5666102,
            longitude || 126.9783881
          ),
          zoom: 16,
        });
      }
      if (!isDirectionLoad && directions) {
        map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(directions[0][1], directions[0][0]),
          zoom: 16,
        });
        var polyline = new naver.maps.Polyline({
          map,
          path: directions.map(
            (value) => new naver.maps.LatLng(value[1], value[0])
          ),
        });
      }
    };
  }, [
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    isDirectionLoad,
    directions,
  ]);
  return <div id="map" className="w-full h-full"></div>;
};

export default BaseMap;
