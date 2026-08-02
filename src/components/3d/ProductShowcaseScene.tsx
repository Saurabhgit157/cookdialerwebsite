import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ProductShowcaseSceneProps {
  activeScreen?: number;
  position?: [number, number, number];
  scale?: number;
}

export const ProductShowcaseScene: React.FC<ProductShowcaseSceneProps> = ({
  activeScreen = 0,
  position = [0, 0, 0],
  scale = 1.15,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  const getScreenContent = () => {
    switch (activeScreen) {
      case 0:
        return (
          <div className="flex flex-col h-full bg-[#0A0A0C] text-white font-sans p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-red-500">Cook Dialer</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">Active</span>
            </div>
            <div className="bg-[#18181E] p-4 rounded-xl border border-red-500/30 flex-grow flex flex-col justify-center items-center text-center space-y-3">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 text-2xl">
                🍲
              </div>
              <h3 className="font-extrabold text-sm text-white">Daily Meals Active</h3>
              <p className="text-xs text-slate-400">Serving Lunch & Dinner in Greater Noida</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col h-full bg-[#0A0A0C] text-white font-sans p-4 space-y-4">
            <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest border-b border-slate-800 pb-2">Request Form</h2>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <label className="text-[10px] text-slate-400 uppercase font-semibold">Meal Type</label>
                <div className="flex gap-2 mt-1.5">
                  <div className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-black">Bachelors</div>
                  <div className="bg-[#18181E] border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-semibold">Family</div>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase font-semibold">People Count</label>
                <div className="flex items-center justify-between bg-[#18181E] border border-slate-800 rounded-lg p-2 mt-1.5 text-xs font-bold">
                  <span className="text-red-400">-</span>
                  <span>4 Persons</span>
                  <span className="text-red-400">+</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-full bg-[#0A0A0C] text-white font-sans p-4 space-y-4">
            <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest border-b border-slate-800 pb-2">My Cook</h2>
            <div className="bg-[#18181E] p-4 rounded-xl border border-red-500/30 text-center space-y-3 flex-grow flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-3xl border-2 border-emerald-400">
                👩‍🍳
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white">Aarti Devi</h3>
                <span className="text-[10px] text-emerald-400 font-bold uppercase">Verified Cook</span>
              </div>
              <div className="w-full bg-red-600 text-white py-2 rounded-lg text-xs font-black">
                📞 Call Cook Direct
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col h-full bg-[#0A0A0C] text-white font-sans p-4 space-y-4">
            <h2 className="text-xs font-bold text-red-500 uppercase tracking-widest border-b border-slate-800 pb-2">Escrow Billing</h2>
            <div className="bg-[#18181E] p-4 rounded-xl border border-slate-800 space-y-3 flex-grow flex flex-col justify-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Monthly Plan (4 People)</span>
              <h3 className="text-2xl font-black text-white">₹5,000 /mo</h3>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <span>🛡️ 48h Escrow Protection</span>
              </div>
              <div className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-lg text-xs font-extrabold text-center">
                Pay Monthly Bill
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.6, 5.2, 0.2]} />
        <meshBasicMaterial color="#FF1744" transparent opacity={0.12} />
      </mesh>

      <RoundedBox args={[2.5, 5.1, 0.22]} radius={0.12} smoothness={6} castShadow receiveShadow>
        <meshStandardMaterial color="#121216" metalness={0.7} roughness={0.3} />
      </RoundedBox>

      <mesh position={[0, 0, 0.111]}>
        <planeGeometry args={[2.3, 4.9]} />
        <meshBasicMaterial color="#0A0A0C" />
      </mesh>

      <Html
        transform
        position={[0, 0, 0.112]}
        rotation={[0, 0, 0]}
        scale={0.1}
        occlude="blending"
      >
        <div className="w-[230px] h-[490px] bg-[#0A0A0C] rounded-[16px] overflow-hidden flex flex-col pointer-events-none select-none transition-all duration-300 shadow-2xl border border-slate-800">
          {getScreenContent()}
        </div>
      </Html>
    </group>
  );
};
