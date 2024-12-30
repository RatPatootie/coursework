import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {

        // Ініціалізація карти з координатами Львова
        const map = L.map(mapRef.current).setView([49.8345943,24.0098582], 16);

        // Додавання тайлів карти
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Додавання маркера на карті Львова
        L.marker([49.8345943,24.0098582]).addTo(map)
            .bindPopup('Барбершоп ')
            .openPopup();
        L.marker([49.8345943,24.0158582]).addTo(map)
            .bindPopup('Барбершоп ')
            .openPopup();


        // Очищення карти при розмонтажі компонента
        return () => {
            map.remove();
        };
    }, []);
    return <div ref={mapRef} className="z-0 h-64 sm:h-96 md:h-128 lg:h-144 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"></div>;
};

export default Map;