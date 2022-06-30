import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
	"pk.eyJ1IjoidmFuc2hndXB0YTI0IiwiYSI6ImNsNHYzc3Y1ODFneTQzbWsyMHdhMncwNmYifQ.M3Xq3AV9fkzzhD2Bk0vRgQ";

export const Map = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(75.7873);
	const [lat, setLat] = useState(26.9124);
	const [zoom, setZoom] = useState(10);

	useEffect(() => {
		getLocation();
	});

	const setLocation = (coord) => {
		if (coord) {
			setLng(coord.coords.longitude);
			setLat(coord.coords.latitude);
			if (map.current) return;
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [coord.coords.longitude, coord.coords.latitude],
				zoom: zoom,
			});
		}
	};
	const getLocation = () => {
		navigator.geolocation.getCurrentPosition(setLocation);
	};

	return <div ref={mapContainer} className='h-1/2 rounded-t-3xl' />;
};
