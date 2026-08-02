import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface PhoneMockupProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  screenImage?: string;
  screenVideo?: string;
}

// 3D GPU Texture Mesh - Perfectly fitted inside the phone bezel boundaries
function ImageScreenMesh({ url }: { url: string }) {
  const texture = useTexture(url);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return (
    <mesh position={[0, 0, 0.113]}>
      <planeGeometry args={[2.30, 4.88]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  screenImage = 'assets/phone-screen.png',
  screenVideo,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mediaSrc, setMediaSrc] = useState<{ type: 'video' | 'image' | 'ui'; url?: string }>({
    type: 'image',
    url: screenImage || 'assets/phone-screen.png',
  });

  useEffect(() => {
    if (screenVideo) {
      setMediaSrc({ type: 'video', url: screenVideo });
    } else if (screenImage) {
      setMediaSrc({ type: 'image', url: screenImage });
    } else {
      const testImage = new Image();
      testImage.src = '/assets/phone-screen.png';
      testImage.onload = () => setMediaSrc({ type: 'image', url: '/assets/phone-screen.png' });
      testImage.onerror = () => {
        const testJpg = new Image();
        testJpg.src = '/assets/phone-screen.jpg';
        testJpg.onload = () => setMediaSrc({ type: 'image', url: '/assets/phone-screen.jpg' });
      };
    }
  }, [screenImage, screenVideo]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
      groupRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Phone Outer Shell */}
      <RoundedBox args={[2.5, 5.1, 0.22]} radius={0.12} smoothness={6} castShadow receiveShadow>
        <meshStandardMaterial color="#121216" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Screen Frame Bezel */}
      <mesh position={[0, 0, 0.111]}>
        <planeGeometry args={[2.34, 4.92]} />
        <meshBasicMaterial color="#0A0A0C" />
      </mesh>

      {/* Option A: Direct 3D Texture Image (Fitted Perfectly Inside Phone Bezel) */}
      {mediaSrc.type === 'image' && mediaSrc.url && (
        <Suspense fallback={null}>
          <ImageScreenMesh url={mediaSrc.url} />
        </Suspense>
      )}

      {/* Option B: Video or Code App UI Overlay */}
      {mediaSrc.type !== 'image' && (
        <Html
          transform
          position={[0, 0, 0.112]}
          rotation={[0, 0, 0]}
          scale={0.1}
          occlude="blending"
        >
          <div className="w-[230px] h-[488px] bg-[#0A0A0C] rounded-[14px] overflow-hidden flex flex-col font-sans select-none pointer-events-none shadow-2xl border-0 p-0 relative">
            
            {mediaSrc.type === 'video' && mediaSrc.url && (
              <video
                src={mediaSrc.url}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}

            {mediaSrc.type === 'ui' && (
              <>
                <div className="bg-gradient-to-r from-[#FF4747] to-[#FF8A00] text-white px-4 py-3 flex items-center justify-between shadow-md">
                  <span className="font-extrabold text-sm tracking-tight">Cook Dialer</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                </div>

                <div className="p-4 flex-grow flex flex-col items-center justify-center space-y-4">
                  <div className="bg-[#18181E] text-slate-100 p-3.5 rounded-xl border border-red-500/30 text-center w-full shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Assigned Cook</span>
                    <p className="text-sm font-extrabold mt-1 text-white">Chef Aarti Ji</p>
                    <span className="text-[10px] text-slate-400">Greater Noida Sector 4</span>
                  </div>

                  <div className="relative w-20 h-20 bg-gradient-to-tr from-[#FF4747] to-[#FF8A00] rounded-full p-1 shadow-lg shadow-red-600/40">
                    <div className="w-full h-full bg-[#18181E] rounded-full flex items-center justify-center text-3xl">
                      👩‍🍳
                    </div>
                  </div>

                  <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Arriving 7:30 PM (Dinner)</span>
                  </div>
                </div>

                <div className="p-4 bg-[#121216] border-t border-slate-800">
                  <div className="w-full bg-gradient-to-r from-[#FF4747] to-[#FF8A00] text-white text-center py-2.5 rounded-lg font-black text-xs uppercase tracking-wider shadow-md">
                    Call Assigned Cook
                  </div>
                </div>
              </>
            )}

          </div>
        </Html>
      )}
    </group>
  );
};
