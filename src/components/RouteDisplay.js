// /src/components/RouteDisplay.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import polyline from '@mapbox/polyline';

const RouteDisplay = ({ route }) => {
    useEffect(() => {
        let map;
        if (!map) {
            map = L.map('map').setView([50.110924, 8.682127], 13); // Initial view on Frankfurt

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);
        }

        const decodedRoute = polyline.decode(route);

        const routeLine = L.polyline(decodedRoute, { color: 'blue' }).addTo(map);

        map.fitBounds(routeLine.getBounds());

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [route]);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default RouteDisplay;
