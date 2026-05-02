import React, { useState, useEffect, useRef, useMemo } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const MapLayerToggle = ({ label, active, onClick }) => (
  <div 
    className="flex items-center justify-between group cursor-pointer py-1"
    onClick={onClick}
  >
    <span className={`font-mono text-[10px] uppercase font-bold transition-colors ${active ? 'text-on-surface' : 'text-slate-500 group-hover:text-on-surface'}`}>{label}</span>
    <div className={`w-10 h-5 rounded-full relative transition-all duration-300 ${active ? 'bg-primary' : 'bg-slate-800'}`}>
      <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 shadow-md ${active ? 'right-0.5 bg-on-primary' : 'left-0.5 bg-slate-500'}`}></div>
    </div>
  </div>
)

const MapButton = ({ icon, mt, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-10 h-10 glass-panel flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-lg bg-[#0A0F14]/90 backdrop-blur-md z-[1000] border border-white/5 ${mt ? 'mt-4' : ''}`}
  >
    <span className="material-symbols-outlined text-[20px]">{icon}</span>
  </button>
)

const InteractiveMap = ({ center, locationName, points = [] }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const userMarker = useRef(null);

  const [layers, setLayers] = useState({
    price: true,
    risk: true,
    infra: true,
    school: true
  });

  const defaultCenter = [72.5714, 23.0225]; // Ahmedabad [lng, lat]
  const mapCenter = center ? [center[1], center[0]] : defaultCenter;

  const pricePerSqFt = useMemo(() => {
    if (!locationName) return 15500;
    const base = 12000;
    const varience = (locationName.length % 13) * 1000;
    return Math.min(25000, base + varience);
  }, [locationName]);

  const pricePercentage = Math.min(100, Math.max(0, ((pricePerSqFt - 12000) / (25000 - 12000)) * 100));

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const initMap = async () => {
      try {
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
          center: mapCenter,
          zoom: 12,
          pitch: 40,
          antialias: true,
          preserveDrawingBuffer: true
        });

        map.current.on('style.load', () => {
          if (!map.current) return;
          addBaseLayers(map.current);
          
          // Initial Marker if not exists
          if (!marker.current) {
            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.innerHTML = `<div class="relative flex items-center justify-center"><div class="w-12 h-12 bg-primary/30 rounded-lg animate-ping absolute"></div><div class="w-6 h-6 bg-primary border-2 border-on-surface rounded-lg shadow-[0_0_15px_rgba(70,241,197,0.8)] z-10"></div></div>`;
            marker.current = new maplibregl.Marker({ element: el })
              .setLngLat(mapCenter)
              .addTo(map.current);
          }
          
          if (points.length > 0) updateRealData(map.current, points);
        });

      } catch (err) {
        console.error('Map Init Error:', err);
      }
    };

    initMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        marker.current = null;
      }
    };
  }, []);

  const addBaseLayers = (m) => {
    try {
      if (!m.getSource('heatmap-data')) {
        m.addSource('heatmap-data', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
        m.addLayer({
          id: 'price-heatmap',
          type: 'heatmap',
          source: 'heatmap-data',
          layout: { 'visibility': layers.price ? 'visible' : 'none' },
          paint: { 'heatmap-opacity': 0.4, 'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,0,0)', 0.2, '#46f1c5', 0.4, '#ffb955', 0.6, '#ff5252'] }
        });
      }

      if (!m.getSource('risk-data')) {
        m.addSource('risk-data', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
        m.addLayer({
          id: 'risk-zones',
          type: 'fill',
          source: 'risk-data',
          layout: { 'visibility': layers.risk ? 'visible' : 'none' },
          paint: { 'fill-color': '#ff5252', 'fill-opacity': 0.2 }
        });
      }

      if (!m.getSource('infra-data')) {
        m.addSource('infra-data', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
        m.addLayer({
          id: 'infra-pipelines',
          type: 'line',
          source: 'infra-data',
          layout: { 'visibility': layers.infra ? 'visible' : 'none' },
          paint: { 'line-color': '#00D4AA', 'line-width': 2, 'line-dasharray': [2, 2] }
        });
      }

      if (!m.getSource('school-data')) {
        m.addSource('school-data', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
        m.addLayer({
          id: 'school-catchment',
          type: 'circle',
          source: 'school-data',
          layout: { 'visibility': layers.school ? 'visible' : 'none' },
          paint: { 'circle-radius': 10, 'circle-color': '#46f1c5', 'circle-opacity': 0.5 }
        });
      }
    } catch (e) { console.warn('Layer add failed:', e); }
  };

  useEffect(() => {
    if (map.current && center) {
      const newCenter = [center[1], center[0]];
      map.current.flyTo({ center: newCenter, zoom: 14 });
      if (marker.current) marker.current.setLngLat(newCenter);
    }
  }, [center]);

  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    
    const toggle = (id, v) => {
      try {
        if (map.current.getLayer(id)) {
          map.current.setLayoutProperty(id, 'visibility', v ? 'visible' : 'none');
        }
      } catch (e) { console.warn('Layer toggle failed:', e); }
    };
    
    toggle('price-heatmap', layers.price);
    toggle('risk-zones', layers.risk);
    toggle('infra-pipelines', layers.infra);
    toggle('school-catchment', layers.school);
  }, [layers]);

  useEffect(() => {
    if (map.current && points.length > 0) {
      if (map.current.isStyleLoaded()) {
        updateRealData(map.current, points);
      } else {
        map.current.once('load', () => updateRealData(map.current, points));
      }
    }
  }, [points]);

  const updateRealData = (m, p) => {
    if (!m.isStyleLoaded()) return;

    // Filter points by layer type
    const schoolPoints = p.filter(pt => pt.properties.layer === 'school');
    const infraPoints = p.filter(pt => pt.properties.layer === 'infra');

    // Update Sources
    if (m.getSource('heatmap-data')) m.getSource('heatmap-data').setData({ type: 'FeatureCollection', features: p });
    if (m.getSource('school-data')) m.getSource('school-data').setData({ type: 'FeatureCollection', features: schoolPoints });
    
    // Infra Pipeline (LineString from points)
    if (m.getSource('infra-data')) {
      const lineCoords = infraPoints.map(pt => pt.geometry.coordinates);
      // Sort by longitude to make a logical "pipeline" path
      lineCoords.sort((a, b) => a[0] - b[0]);
      
      m.getSource('infra-data').setData({
        type: 'FeatureCollection',
        features: lineCoords.length > 1 ? [{
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: lineCoords },
          properties: {}
        }] : []
      });
    }
    
    // Risk zones can still be a heuristic but centered on points
    if (m.getSource('risk-data') && p.length > 0) {
      const riskPt = p[p.length % p.length]; // Deterministic risk point
      m.getSource('risk-data').setData({
        type: 'FeatureCollection',
        features: [{ 
          type: 'Feature', 
          geometry: { 
            type: 'Polygon', 
            coordinates: [createCircle(riskPt.geometry.coordinates[0], riskPt.geometry.coordinates[1], 0.003)] 
          } 
        }]
      });
    }
  };

  const createCircle = (lng, lat, radius) => {
    const coords = [];
    for (let i = 0; i < 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      coords.push([lng + Math.cos(angle) * radius, lat + Math.sin(angle) * radius]);
    }
    coords.push(coords[0]);
    return coords;
  };

  return (
    <section className="glass-panel overflow-hidden flex flex-col h-[600px] relative rounded-xl border border-white/5 shadow-2xl">
      <div className="absolute top-4 left-4 z-[1000] w-64 glass-panel p-5 flex flex-col gap-4 rounded-xl bg-[#0A0F14]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
        <h4 className="font-label-caps text-[11px] text-primary border-b border-white/10 pb-3 uppercase font-bold tracking-widest">MAP LAYERS</h4>
        <div className="space-y-4">
          <MapLayerToggle label="Price Heatmap" active={layers.price} onClick={() => setLayers(l => ({ ...l, price: !l.price }))} />
          <MapLayerToggle label="Risk Zones" active={layers.risk} onClick={() => setLayers(l => ({ ...l, risk: !l.risk }))} />
          <MapLayerToggle label="Infra Pipelines" active={layers.infra} onClick={() => setLayers(l => ({ ...l, infra: !l.infra }))} />
          <MapLayerToggle label="School Catchment" active={layers.school} onClick={() => setLayers(l => ({ ...l, school: !l.school }))} />
        </div>
        
        <div className="mt-2 pt-5 border-t border-white/10 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-tight">Avg Sq.Ft Rate</p>
            <span className="text-[10px] font-mono text-primary font-bold">₹{pricePerSqFt.toLocaleString()}</span>
          </div>
          <div className="relative h-2 w-full bg-gradient-to-r from-[#46f1c5] via-[#ffb955] to-[#ff5252] rounded-full">
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-primary shadow-[0_0_10px_white] transition-all duration-700"
              style={{ left: `${pricePercentage}%`, marginLeft: '-6px' }}
            ></div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-slate-500 font-bold uppercase tracking-tighter">
            <span>₹12k</span>
            <span>₹18k</span>
            <span>₹25k+</span>
          </div>
        </div>
      </div>

      <div ref={mapContainer} className="flex-1 w-full h-full" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-[500] pointer-events-none">
        <div className="glass-panel px-4 py-1.5 text-[10px] font-bold text-primary uppercase tracking-wider whitespace-nowrap bg-[#0A0F14]/90 border border-primary/30 rounded-lg shadow-[0_0_20px_rgba(70,241,197,0.2)]">
          {locationName || 'Ahmedabad, GJ'}
        </div>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-3 z-[1000]">
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
              (err) => console.warn('Geolocation Error:', err),
              options
            );
          }} 
        />
      </div>
    </section>
  )
}

export default InteractiveMap