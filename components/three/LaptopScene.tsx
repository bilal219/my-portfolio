"use client";

import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  PresentationControls,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useIsDark } from "@/lib/useIsDark";

const W = 3.2; // base width
const D = 2.2; // base depth
const BASE_H = 0.1;
const LID_T = 0.06;
const SCREEN_W = 3.0;
const SCREEN_H = SCREEN_W / 1.6; // screenshots are 16:10
const LID_H = SCREEN_H + 0.2;
const OPEN_ANGLE = -0.24; // radians, leaning back a little
const CLOSED_ANGLE = Math.PI / 2 - 0.02;

function Laptop({ src, onReady }: { src: string; onReady?: () => void }) {
  const isDark = useIsDark();
  const texture = useTexture(src);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const lid = useRef<THREE.Group>(null!);

  // Start closed. Set once here (not as a prop) so a re-render, such as a
  // theme change, doesn't snap the lid shut again.
  useLayoutEffect(() => {
    lid.current.rotation.x = CLOSED_ANGLE;
  }, []);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // The lid opens once the screenshot has loaded.
  useFrame((_, delta) => {
    lid.current.rotation.x = THREE.MathUtils.damp(
      lid.current.rotation.x,
      OPEN_ANGLE,
      2.2,
      Math.min(delta, 0.05)
    );
  });

  const shell = isDark ? "#6b7280" : "#c9ced6";

  return (
    <group position={[0, -0.85, 0.2]}>
      {/* Base */}
      <RoundedBox args={[W, BASE_H, D]} radius={0.04} smoothness={4} position={[0, BASE_H / 2, 0]}>
        <meshStandardMaterial color={shell} metalness={0.85} roughness={0.28} />
      </RoundedBox>

      {/* Keyboard well */}
      <mesh position={[0, BASE_H + 0.002, -0.28]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W * 0.86, D * 0.42]} />
        <meshStandardMaterial color="#0f1115" roughness={0.85} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, BASE_H + 0.002, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.15, 0.62]} />
        <meshStandardMaterial
          color={isDark ? "#2f343c" : "#b6bcc6"}
          metalness={0.3}
          roughness={0.45}
        />
      </mesh>

      {/* Lid, hinged at the back edge of the base */}
      <group ref={lid} position={[0, BASE_H, -D / 2 + 0.05]}>
        <RoundedBox
          args={[W, LID_H, LID_T]}
          radius={0.025}
          smoothness={4}
          position={[0, LID_H / 2, -LID_T / 2]}
        >
          <meshStandardMaterial color={shell} metalness={0.85} roughness={0.28} />
        </RoundedBox>

        {/* Bezel */}
        <mesh position={[0, LID_H / 2, 0.001]}>
          <planeGeometry args={[W - 0.06, LID_H - 0.06]} />
          <meshStandardMaterial color="#08090b" roughness={0.5} />
        </mesh>

        {/* Screen: unlit so the screenshot keeps its real colours */}
        <mesh position={[0, LID_H / 2 + 0.03, 0.003]}>
          <planeGeometry args={[SCREEN_W, SCREEN_H]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

export default function LaptopScene({
  src,
  onReady,
}: {
  src: string;
  onReady?: () => void;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.25, 5.4], fov: 32 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.15, 0)}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.8} />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#60a5fa" />
      <pointLight position={[0, 2, 3]} intensity={0.6} color="#00b4d8" />

      {/* Studio reflections built in code, so nothing is fetched */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 4]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color="#93c5fd" />
        <Lightformer form="rect" intensity={1.5} position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} color="#a5f3fc" />
        <Lightformer form="ring" intensity={2} position={[0, 3, -5]} scale={3} />
      </Environment>

      <Suspense fallback={null}>
        <PresentationControls
          global={false}
          cursor
          snap
          speed={1.4}
          polar={[-0.15, 0.25]}
          azimuth={[-0.7, 0.7]}
        >
          <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.25}>
            <Laptop src={src} onReady={onReady} />
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -0.9, 0]} opacity={0.5} scale={9} blur={2.6} far={2.2} />
      </Suspense>
    </Canvas>
  );
}
