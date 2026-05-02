import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for Leaflet default icons in React
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LayerToggle = ({ icon, label, active, error }) => (
  <button className={`bg-[#0A0F14]/90 backdrop-blur p-2 border flex items-center gap-2 text-[10px] font-mono uppercase font-bold rounded ${active ? 'border-primary text-primary' : error ? 'border-error text-error' : 'border-white/10 text-slate-400'}`}>
    <span className="material-symbols-outlined text-sm">{icon}</span> {label}
  </button>
)

// Component to handle map centering when polyline changes
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}

const CommuteMap = ({ polyline }) => {
  // Default to Ahmedabad if no polyline
  const defaultCenter = [23.0225, 72.5714];
  const points = polyline || [];
  
  const center = points.length > 0 ? points[Math.floor(points.length / 2)] : defaultCenter;
  const zoom = points.length > 0 ? 12 : 11;

  return (
    <div className="flex-1 glass-panel relative h-[600px] overflow-hidden rounded-xl bg-[#0A0F14] border border-white/10 shadow-2xl">
      {/* Map Layers Toggle */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <LayerToggle icon="straighten" label="Advertised Route" />
        <LayerToggle icon="route" label="Actual Road Route" active />
        <LayerToggle icon="dangerous" label="Bottlenecks" error />
      </div>

      {/* Real Map */}
      <MapContainer 
        center={defaultCenter} 
        zoom={zoom} 
        maxZoom={19}
        minZoom={5}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          maxZoom={19}
        />
        {points.length > 0 && (
          <Polyline 
            positions={points} 
            pathOptions={{ color: '#00D4AA', weight: 4, lineJoin: 'round', opacity: 0.8 }} 
          />
        )}
        {points.length > 0 && (
          <>
            <Marker position={points[0]} />
            <Marker position={points[points.length - 1]} />
          </>
        )}
      </MapContainer>

      {/* Bottleneck Status (Overlay) - Only show if audit has run */}
      {points.length > 0 && (
        <div className="absolute bottom-6 left-6 w-56 glass-panel overflow-hidden border-error/50 rounded-lg z-[1000] bg-black/80 backdrop-blur-md p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-error px-1.5 py-0.5 text-[8px] font-bold text-white uppercase font-mono rounded">CRITICAL</div>
            <span className="text-white text-[9px] font-mono font-bold uppercase tracking-tight">Traffic Congestion</span>
          </div>
          <div className="border-t border-white/10 pt-2">
            <p className="text-[10px] font-mono text-slate-300 leading-tight uppercase font-bold">Heuristic Analysis: Significant delay detected at major junction.</p>
          </div>
        </div>
      )}
      
      {/* City Label (Aesthetic) */}
      <div className="absolute bottom-10 right-10 pointer-events-none opacity-10">
        <h1 className="text-8xl font-black text-white uppercase tracking-tighter select-none">PropSight</h1>
      </div>
    </div>
  )
}

export default CommuteMap
