import type { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function Map({ height }: { height: string }) {
  const position: LatLngTuple = [49.1234, 18.32672];

  return (
    <div style={{ height }}>
      <MapContainer
        style={{
          height: '100%',
        }}
        center={position}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
