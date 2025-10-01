"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles: React.FC = () => {
  const count = 450;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  const [isDark, setIsDark] = useState(false);

  const particles = React.useMemo(() => {
    const temp: { x: number; y: number; z: number; speed: number }[] = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 60,
        y: Math.random() * 50 - 25, // Spread across full height
        z: Math.random() * -40 - 3, // Depth for 3D effect
        speed: Math.random() * 0.02 + 0.01 // Random upward speed
      });
    }
    return temp;
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(isDark ? '#ffffff' : '#0077b6');
    }
  }, [isDark]);

  useFrame((state) => {
    if (mesh.current) {
      const temp = new THREE.Object3D();
      const time = state.clock.elapsedTime;

      for (let i = 0; i < count; i++) {
        const particle = particles[i];

        // Move particle upwards continuously
        particle.y += particle.speed;

        // Reset to bottom when reaching top
        if (particle.y > 30) {
          particle.y = -25;
          particle.x = (Math.random() - 0.5) * 60;
          particle.z = Math.random() * -40 - 3;
        }

        // Slight horizontal drift for natural movement
        const driftX = Math.sin(time * 0.5 + i) * 0.02;

        temp.position.set(
          particle.x + driftX,
          particle.y,
          particle.z
        );

        // Scale based on depth for perspective effect
        const scale = 1 + (particle.z + 35) / 35;
        temp.scale.set(scale, scale, scale);

        temp.updateMatrix();
        mesh.current.setMatrixAt(i, temp.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial ref={materialRef} color={isDark ? "#ffffff" : "#0077b6"} transparent opacity={0.5} />
    </instancedMesh>
  );
};

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.3} 
        color="#60A5FA" 
      />
      <pointLight 
        position={[5, 5, 10]} 
        intensity={0.4} 
        color="#60A5FA" 
      />
      <pointLight 
        position={[-5, -5, 10]} 
        intensity={0.3} 
        color="#8B5CF6" 
      />
      <spotLight
        position={[0, 8, 5]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={2.0}
        color="#60A5FA"
        target-position={[0, 0, 0]}
      />
      <FloatingParticles />
    </>
  );
}

export default function AnimatedSphereBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Light mode background */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          background: `radial-gradient(ellipse at 15% 15%, var(--color-bg-light-start) 60%, var(--color-bg-light-end) 100%)`
        }}
      />
      
      {/* Dark mode background */}
      <div className="absolute inset-0 hidden dark:block bg-black" />
      
      {/* Dark mode spotlight */}
      <div 
        className="absolute inset-0 hidden dark:block" 
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(53, 167, 255, 0.15) 0%, transparent 65%),
            radial-gradient(circle at 70% 60%, rgba(53, 167, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)
          `
        }}
      />
      
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 100,
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}