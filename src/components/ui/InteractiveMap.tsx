import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  mode: 'customer' | 'cook';
}

const mapData = [
  {
    id: 1,
    name: 'Gaur City 1 & 2',
    lat: 28.6139,
    lng: 77.4360,
    cooksAvailable: 18,
    demand: 'High',
    rating: 4.9,
    features: ['Veg & Non-Veg', 'Family Plans'],
  },
  {
    id: 2,
    name: 'Greater Noida West (Sec 4)',
    lat: 28.5910,
    lng: 77.4440,
    cooksAvailable: 24,
    demand: 'Very High',
    rating: 4.8,
    features: ['Fast Matching', 'Bachelors'],
  },
  {
    id: 3,
    name: 'Noida Extension (Sec 16)',
    lat: 28.5830,
    lng: 77.4330,
    cooksAvailable: 12,
    demand: 'Medium',
    rating: 4.7,
    features: ['Premium Cooks'],
  },
  {
    id: 4,
    name: 'Alpha 1 & 2',
    lat: 28.4900,
    lng: 77.5110,
    cooksAvailable: 15,
    demand: 'High',
    rating: 4.8,
    features: ['Student Hub', 'Veg Only Options'],
  },
  {
    id: 5,
    name: 'Beta 1 & 2',
    lat: 28.4780,
    lng: 77.5130,
    cooksAvailable: 10,
    demand: 'Medium',
    rating: 4.6,
    features: ['Family Preferred'],
  },
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ mode }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletInstance = useRef<L.Map | null>(null);

  const isCook = mode === 'cook';
  const accentColor = isCook ? '#10B981' : '#FF4747'; // Emerald for cooks, Premium Coral Red for customers
  const hoverColor = isCook ? '#059669' : '#FF8A00';

  useEffect(() => {
    if (!mapRef.current) return;

    if (!leafletInstance.current) {
      leafletInstance.current = L.map(mapRef.current, {
        center: [28.5600, 77.4700],
        zoom: 11,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      // Premium Light Mode Map Tiles (CartoDB Positron)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(leafletInstance.current);

      L.control.zoom({ position: 'bottomright' }).addTo(leafletInstance.current);
    }

    // Clear existing markers when mode changes
    leafletInstance.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        leafletInstance.current?.removeLayer(layer);
      }
    });

    // Add new markers
    mapData.forEach((loc) => {
      const customIcon = L.divIcon({
        className: 'custom-leaflet-icon',
        html: `
          <div style="position: relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${accentColor}; opacity: 0.3; animation: mapPulse 2s infinite;"></div>
            <div style="position: relative; width: 12px; height: 12px; border-radius: 50%; background-color: ${accentColor}; border: 2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.2);"></div>
          </div>
          <style>
            @keyframes mapPulse {
              0% { transform: scale(1); opacity: 0.5; }
              70% { transform: scale(2.5); opacity: 0; }
              100% { transform: scale(1); opacity: 0; }
            }
          </style>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12],
      });

      const popupContent = isCook
        ? `
          <div style="padding: 12px; min-width: 180px; font-family: 'Outfit', sans-serif;">
            <h4 style="margin: 0 0 4px 0; color: #0F172A; font-size: 14px; font-weight: 800;">${loc.name}</h4>
            <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${accentColor};"></span>
              <span style="color: ${accentColor}; font-weight: bold; font-size: 11px; text-transform: uppercase;">Customer Demand: ${loc.demand}</span>
            </div>
            <p style="margin: 0 0 8px 0; color: #475569; font-size: 12px;">Top requirements: ${loc.features.join(', ')}</p>
            <div style="background: rgba(16, 185, 129, 0.1); border-radius: 6px; padding: 6px; text-align: center;">
              <span style="color: #059669; font-weight: 800; font-size: 12px;">Earn up to ₹35k/mo here</span>
            </div>
          </div>
        `
        : `
          <div style="padding: 12px; min-width: 180px; font-family: 'Outfit', sans-serif;">
            <h4 style="margin: 0 0 4px 0; color: #0F172A; font-size: 14px; font-weight: 800;">${loc.name}</h4>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="color: ${accentColor}; font-weight: bold; font-size: 12px;">${loc.cooksAvailable} Cooks Nearby</span>
              <span style="background: rgba(255, 71, 71, 0.1); color: ${accentColor}; padding: 2px 6px; border-radius: 12px; font-size: 10px; font-weight: 800;">★ ${loc.rating}</span>
            </div>
            <p style="margin: 0 0 8px 0; color: #475569; font-size: 12px;">${loc.features.join(' • ')}</p>
            <button style="width: 100%; background: linear-gradient(135deg, ${accentColor}, ${hoverColor}); color: white; border: none; padding: 8px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: 'Outfit', sans-serif;">Book in this area</button>
          </div>
        `;

      L.marker([loc.lat, loc.lng], { icon: customIcon })
        .addTo(leafletInstance.current!)
        .bindPopup(popupContent);
    });

    return () => {
      // Don't destroy map on unmount in React.StrictMode, just clean layers if needed
      // Map instance is kept alive in ref
    };
  }, [mode, accentColor, hoverColor]);

  return (
    <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl premium-card">
      <div ref={mapRef} className="w-full h-full" style={{ zIndex: 1 }} />
      
      {/* Light Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.0) 50%, rgba(255,255,255,0.1) 100%)' }} />

      {/* Floating Legend */}
      <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg">
        <h3 className="text-slate-900 font-bold text-sm mb-2">{isCook ? 'Service Demand Zones' : 'Active Cooks in Greater Noida'}</h3>
        <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <div className="relative flex items-center justify-center w-4 h-4">
            <span className={`absolute w-full h-full rounded-full opacity-40 animate-ping`} style={{ backgroundColor: accentColor }}></span>
            <span className="relative w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
          </div>
          {isCook ? 'High Demand Area' : 'Cooks Available for Booking'}
        </div>
      </div>
    </div>
  );
};
