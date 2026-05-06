import React, { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const LayerToggle = ({ icon, label, active, error }) => (
  <button className={`bg-[#0A0F14]/90 backdrop-blur p-2 border flex items-center gap-2 text-[10px] font-mono uppercase font-bold rounded ${active ? 'border-primary text-primary' : error ? 'border-error text-error' : 'border-white/10 text-slate-400'}`}>
    <span className="material-symbols-outlined text-sm">{icon}</span> {label}
  </button>
)

const MapButton = ({ icon, mt, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-10 h-10 glass-panel flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-lg bg-[#0A0F14]/90 backdrop-blur-md z-[1000] border border-white/10 ${mt ? 'mt-4' : ''}`}
  >
    <span className="material-symbols-outlined text-[20px]">{icon}</span>
  </button>
)

const CommuteMap = ({ polyline }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const startMarker = useRef(null);
  const endMarker = useRef(null);
  const userMarker = useRef(null);

  // Default to Ahmedabad if no polyline
  const defaultCenter = [72.5714, 23.0225]; // [lng, lat]
  
  // Convert [lat, lng] to [lng, lat] for MapLibre
  const points = polyline ? polyline.map(p => [p[1], p[0]]) : [];
  
  const center = points.length > 0 ? points[Math.floor(points.length / 2)] : defaultCenter;

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: center,
      zoom: points.length > 0 ? 12 : 11,
      pitch: 40,
      antialias: true,
      preserveDrawingBuffer: true
    });

    map.current.on('style.load', () => {
      if (!map.current) return;

      // Add Route Source & Layer if not exists
      if (!map.current.getSource('route')) {
        map.current.addSource('route', {
          'type': 'geojson',
          'data': { 'type': 'Feature', 'properties': {}, 'geometry': { 'type': 'LineString', 'coordinates': points } }
        });

        map.current.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': { 'line-join': 'round', 'line-cap': 'round' },
          'paint': { 'line-color': '#00D4AA', 'line-width': 4, 'line-opacity': 0.8 }
        });
      }
      
      // If data was ready before style, sync it now
      if (polyline && polyline.length > 0) {
        syncRouteData();
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const syncRouteData = () => {
    if (!map.current || !map.current.isStyleLoaded()) return;

    const source = map.current.getSource('route');
    if (source) {
      source.setData({
        'type': 'Feature',
        'properties': {},
        'geometry': { 'type': 'LineString', 'coordinates': points }
      });
    }

    // Cleanup existing markers
    if (startMarker.current) startMarker.current.remove();
    if (endMarker.current) endMarker.current.remove();

    if (points.length > 0) {
      const startEl = document.createElement('div');
      startEl.className = 'w-4 h-4 bg-primary rounded-full border-2 border-white shadow-[0_0_10px_#00D4AA]';
      startMarker.current = new maplibregl.Marker({ element: startEl }).setLngLat(points[0]).addTo(map.current);

      const endEl = document.createElement('div');
      endEl.className = 'w-4 h-4 bg-error rounded-full border-2 border-white shadow-[0_0_10px_#ff5252]';
      endMarker.current = new maplibregl.Marker({ element: endEl }).setLngLat(points[points.length - 1]).addTo(map.current);

      const bounds = points.reduce((acc, coord) => acc.extend(coord), new maplibregl.LngLatBounds(points[0], points[0]));
      map.current.fitBounds(bounds, { padding: 50, duration: 2000 });
    }
  };

  // Update Route and Markers when polyline changes
  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      syncRouteData();
    }
  }, [polyline]);

  return (
    <div className="w-full glass-panel relative h-[400px] lg:h-[600px] overflow-hidden rounded-xl bg-[#0A0F14] border border-white/10 shadow-2xl no-print">
      {/* Map Layers Toggle */}
      <div className="absolute top-4 left-4 lg:right-4 lg:left-auto z-[1000] flex flex-col gap-2">
        <LayerToggle icon="straighten" label="Advertised Route" />
        <LayerToggle icon="route" label="Actual Road Route" active />
        <LayerToggle icon="dangerous" label="Bottlenecks" error />
      </div>

      <div ref={mapContainer} className="w-full h-full" />

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 z-[1000] lg:mr-[180px]">
        <MapButton icon="add" onClick={() => map.current?.zoomIn()} />
        <MapButton icon="remove" onClick={() => map.current?.zoomOut()} />
        <MapButton 
          icon="my_location" 
          mt 
          onClick={() => {
            const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const coords = [pos.coords.longitude, pos.coords.latitude];
                map.current?.flyTo({ center: coords, zoom: 14 });
                
                if (!userMarker.current && map.current) {
                  const el = document.createElement('div');
                  el.className = 'user-location-marker';
                  el.innerHTML = `
                    <div class="relative flex items-center justify-center">
                      <div class="w-8 h-8 bg-blue-500/30 rounded-full animate-ping absolute"></div>
                      <div class="w-4 h-4 bg-blue-500 border-2 border-white rounded-full z-10 shadow-lg"></div>
                    </div>
                  `;
                  userMarker.current = new maplibregl.Marker({ element: el })
                    .setLngLat(coords)
                    .addTo(map.current);
                } else if (userMarker.current) {
                  userMarker.current.setLngLat(coords);
                }
              },
              (err) => console.warn(err),
              options
            );
          }} 
        />
      </div>

      {/* Bottleneck Status (Overlay) */}
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
