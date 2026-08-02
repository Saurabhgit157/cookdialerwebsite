import React from 'react';
import { Float } from '@react-three/drei';

interface FloatingElementsProps {
  scale?: number;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Floating Crimson Tomato */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={2} position={[-2.4, 1.4, -0.5]}>
        <mesh>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial color="#FF1744" roughness={0.2} metalness={0.1} />
        </mesh>
      </Float>

      {/* Floating Emerald Green Plate Ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.8} position={[2.2, 1.8, -1]}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.35, 0.08, 16, 32]} />
          <meshStandardMaterial color="#10B981" roughness={0.3} metalness={0.4} />
        </mesh>
      </Float>

      {/* Floating Metallic Pot */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5} position={[2.4, -1.6, 0.2]}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.45, 32]} />
          <meshStandardMaterial color="#64748B" roughness={0.15} metalness={0.85} />
        </mesh>
      </Float>

      {/* Floating Coral Flame Orb */}
      <Float speed={2.8} rotationIntensity={2} floatIntensity={2.2} position={[-2.2, -1.8, -0.8]}>
        <mesh>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial color="#FF7043" roughness={0.4} metalness={0.3} />
        </mesh>
      </Float>

      {/* Floating Gold Spice Sphere */}
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1.6} position={[1.2, -2.4, -1.5]}>
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.5} metalness={0.2} />
        </mesh>
      </Float>
    </group>
  );
};
