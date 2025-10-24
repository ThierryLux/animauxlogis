"use client";

import dynamic from "next/dynamic";
import styles from "./MapArea.module.css"
//import "leaflet/dist/leaflet.css";  -> importé dans _app.js


// Chargement dynamique des composants React-Leaflet
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Polygon = dynamic(() => import("react-leaflet").then(mod => mod.Polygon), { ssr: false });

export default function MapArea() {
  const center = [49.310945, 6.260148]; // Volstroff, 25 rue Principale
  const ZOOM_LEVEL = 12;

  const GreenZone = [
    [49.337563, 6.27653],
    [49.352664, 6.233424],
    [49.320196, 6.226229],
    [49.294202, 6.204624],
    [49.300203, 6.319278],
  ];

  const BlueZone = [
    [49.306795, 6.177495],
    [49.266471, 6.202],
    [49.264563, 6.309293],
    [49.297351, 6.348785],
    [49.311001, 6.350581],
    [49.335106, 6.328709],
    [49.354857, 6.299923],
    [49.362653, 6.271371],
    [49.35447,  6.233209],
  ];

  const location = { lat: 49.310945, lng: 6.260148 };

return (
    <div className={styles.mapWrapper}>
      <MapContainer center={center} zoom={ZOOM_LEVEL} className={styles.mapContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[location.lat, location.lng]} />
  
        <Polygon positions={GreenZone} pathOptions={{ color: "green", fillColor: "green", fillOpacity: 0.4 }} />
        <Polygon positions={BlueZone} pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.2 }} />
      </MapContainer>
    </div>
  );
}
