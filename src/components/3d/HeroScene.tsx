import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { PhoneMockup } from './PhoneMockup';
import { FloatingElements } from './FloatingElements';

interface HeroSceneProps {
  screenImage?: string;
  screenVideo?: string;
}

export default function HeroScene({ screenImage, screenVideo }: HeroSceneProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`absolute inset-0 z-10 h-full w-full ${isMobile ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      <Canvas camera={{ position: [0, 0, 9.5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-4, -4, 2]} intensity={0.8} color="#10B981" />
          <pointLight position={[4, 4, 2]} intensity={0.6} color="#FF5722" />

          <PhoneMockup
            position={[1.4, 0, 0]}
            rotation={[0, -18 * (Math.PI / 180), 0]}
            screenImage={screenImage}
            screenVideo={screenVideo}
          />
          <FloatingElements />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            maxPolarAngle={Math.PI / 2 + 0.25}
            minPolarAngle={Math.PI / 2 - 0.25}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
