"use client";

import curGeoStore from "@/lib/curGeoStore";
import { useEffect, useState } from "react";

const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID}`;

interface LocationType {
  x?: number;
  y?: number;
}

const BaseMap = () => {
  const { latitude, longitude, setLatitude, setLongitude } = curGeoStore(
    (state) => state
  );

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

    script.onload = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(
          latitude || 37.5666102,
          longitude || 126.9783881
        ),
        zoom: 16,
      });
    };
  }, [latitude, longitude, setLatitude, setLongitude]);
  return <div id="map" className="w-full h-full"></div>;
};

export default BaseMap;
