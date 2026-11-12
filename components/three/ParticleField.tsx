"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useIsDark } from "@/lib/useIsDark";

const COUNT = 600;
const HEIGHT = 50; // particles wrap vertically inside [-25, 25]
const HALF = HEIGHT / 2;

/** Soft round dot, so points don't render as squares. */
function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.85)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

const wrap = (y: number) => ((((y + HALF) % HEIGHT) + HEIGHT) % HEIGHT) - HALF;

/** Shared input state, written by window listeners and read every frame. */
const input = { x: 0, y: 0, scroll: 0 };

function Particles() {
  const isDark = useIsDark();
  const points = useRef<THREE.Points>(null!);
  const texture = useMemo(makeDotTexture, []);
  useEffect(() => () => texture.dispose(), [texture]);

  const { base, display, speeds } = useMemo(() => {
    const base = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      base[i * 3] = (Math.random() - 0.5) * 60;
      base[i * 3 + 1] = Math.random() * HEIGHT - HALF;
      base[i * 3 + 2] = Math.random() * -40 - 3;
      speeds[i] = Math.random() * 0.6 + 0.3; // units per second
    }
    return { base, display: base.slice(), speeds };
  }, []);

  const scrollOffset = useRef(0);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    // Ease toward the page scroll so the field glides instead of jumping.
    scrollOffset.current += (input.scroll * 0.006 - scrollOffset.current) * (1 - Math.exp(-dt * 6));
    const t = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      base[i3 + 1] += speeds[i] * dt;
      const z = base[i3 + 2];
      // Near particles move more with scroll than far ones (parallax).
      const depth = 1 - (-z - 3) / 40;
      display[i3] = base[i3] + Math.sin(t * 0.5 + i) * 0.15;
      display[i3 + 1] = wrap(base[i3 + 1] + scrollOffset.current * (0.4 + depth));
      display[i3 + 2] = z;
    }
    const attr = points.current.geometry.attributes.position as THREE.BufferAttribute;
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[display, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.14}
        sizeAttenuation
        transparent
        depthWrite={false}
        opacity={isDark ? 0.75 : 0.55}
        color={isDark ? "#ffffff" : "#0077b6"}
      />
    </points>
  );
}

/** Moves the camera a little toward the cursor for a sense of depth. */
function Rig() {
  const { camera } = useThree();
  useFrame((_, delta) => {
    const k = 1 - Math.exp(-Math.min(delta, 0.05) * 2.5);
    camera.position.x += (input.x * 1.4 - camera.position.x) * k;
    camera.position.y += (input.y * 0.9 - camera.position.y) * k;
    camera.lookAt(0, 0, -20);
  });
  return null;
}

export default function ParticleField() {
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      input.x = (e.clientX / window.innerWidth) * 2 - 1;
      input.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onScroll = () => {
      input.scroll = window.scrollY;
    };
    onScroll();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <Particles />
      <Rig />
    </Canvas>
  );
}
