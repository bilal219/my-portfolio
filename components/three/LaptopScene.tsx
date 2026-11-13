"use client";

import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
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
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { useIsDark } from "@/lib/useIsDark";

const W = 3.2; // base width
const D = 2.2; // base depth
const BASE_H = 0.1;
const LID_T = 0.06;
const SCREEN_W = 3.0;
const SCREEN_H = SCREEN_W / 1.6; // project images are 16:10
const LID_H = SCREEN_H + 0.2;
const OPEN_ANGLE = -0.24; // radians, leaning back a little
const CLOSED_ANGLE = Math.PI / 2 - 0.02;

/* ------------------------------------------------------------------ */
/* Keyboard layout                                                     */
/* ------------------------------------------------------------------ */

// Every row is 14.5 key units wide, like a laptop keyboard.
type KeyDef = [label: string, units: number, small?: boolean];

const ROWS: { height: number; keys: KeyDef[] }[] = [
  {
    height: 0.62,
    keys: [
      ["esc", 1.5, true],
      ...Array.from({ length: 12 }, (_, i): KeyDef => [`F${i + 1}`, 1, true]),
      ["â»", 1, true],
    ],
  },
  {
    height: 1,
    keys: [
      ..."`1234567890-=".split("").map((c): KeyDef => [c, 1]),
      ["delete", 1.5, true],
    ],
  },
  {
    height: 1,
    keys: [["tab", 1.5, true], ..."QWERTYUIOP[]\\".split("").map((c): KeyDef => [c, 1])],
  },
  {
    height: 1,
    keys: [
      ["caps", 1.8, true],
      ..."ASDFGHJKL;'".split("").map((c): KeyDef => [c, 1]),
      ["return", 1.7, true],
    ],
  },
  {
    height: 1,
    keys: [
      ["shift", 2.3, true],
      ..."ZXCVBNM,./".split("").map((c): KeyDef => [c, 1]),
      ["shift", 2.2, true],
    ],
  },
  {
    height: 1,
    keys: [
      ["fn", 1, true],
      ["ctrl", 1, true],
      ["opt", 1, true],
      ["âŒ˜", 1.25],
      ["", 5],
      ["âŒ˜", 1.25],
      ["opt", 1, true],
      ["â—€", 1, true],
      ["ARROWS_UD", 1],
      ["â–¶", 1, true],
    ],
  },
];

const KB_UNITS = 14.5;
const KB_W = W * 0.74;
const U = KB_W / KB_UNITS;
const GAP = U * 0.1;
const KB_D = ROWS.reduce((sum, r) => sum + r.height, 0) * U;
const KB_Z0 = -D / 2 + 0.2; // back edge of the keyboard
const KEY_H = 0.008;

type KeyRect = { x: number; z: number; w: number; d: number; label: string; small: boolean };

function buildKeys(): KeyRect[] {
  const keys: KeyRect[] = [];
  let z = KB_Z0;
  for (const row of ROWS) {
    const rowD = row.height * U;
    let x = -KB_W / 2;
    for (const [label, units, small = false] of row.keys) {
      const w = units * U;
      if (label === "ARROWS_UD") {
        // Half-height up and down arrows stacked in one slot
        keys.push({ x: x + w / 2, z: z + rowD / 4, w: w - GAP, d: rowD / 2 - GAP, label: "â–²", small: true });
        keys.push({ x: x + w / 2, z: z + (rowD * 3) / 4, w: w - GAP, d: rowD / 2 - GAP, label: "â–¼", small: true });
      } else {
        keys.push({ x: x + w / 2, z: z + rowD / 2, w: w - GAP, d: rowD - GAP, label, small });
      }
      x += w;
    }
    z += rowD;
  }
  return keys;
}

/** Key labels drawn once onto a transparent texture laid over the keycaps. */
function makeLabelTexture(keys: KeyRect[]) {
  const px = 2048 / KB_W;
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = Math.round(KB_D * px);
  const ctx = canvas.getContext("2d")!;
  // Backlit legends: white letters with a soft white halo
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
  ctx.shadowBlur = 6;
  ctx.textBaseline = "middle";

  for (const k of keys) {
    if (!k.label) continue;
    const cx = (k.x + KB_W / 2) * px;
    const cy = (k.z - KB_Z0) * px;
    const size = (k.small ? 0.2 : 0.36) * U * px;
    ctx.font = `500 ${size}px -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`;
    if (k.small && k.w > U * 1.2) {
      // Modifier keys: label in the bottom-left corner, like a real keyboard
      ctx.textAlign = "left";
      ctx.fillText(k.label, cx - (k.w / 2) * px + U * 0.14 * px, cy + (k.d / 2) * px - size * 0.9);
    } else {
      ctx.textAlign = "center";
      ctx.fillText(k.label, cx, cy);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Perforated speaker grille. */
function makeGrilleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;
  // alphaMap: black is see-through, white dots become the holes
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  for (let y = 6; y < canvas.height; y += 12) {
    for (let x = 6; x < canvas.width; x += 12) {
      ctx.beginPath();
      ctx.arc(x, y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  return new THREE.CanvasTexture(canvas);
}

function Keyboard({ glow }: { glow: React.RefObject<number> }) {
  const keys = useMemo(buildKeys, []);
  const ref = useRef<THREE.InstancedMesh>(null!);
  const geometry = useMemo(() => new RoundedBoxGeometry(1, 1, 1, 2, 0.12), []);
  const labels = useMemo(() => makeLabelTexture(keys), [keys]);
  const labelMat = useRef<THREE.MeshBasicMaterial>(null!);
  const wellMat = useRef<THREE.MeshStandardMaterial>(null!);

  // Backlight follows the lid: off when closed, a soft glow once open.
  useFrame(() => {
    const g = glow.current ?? 0;
    labelMat.current.opacity = 0.2 + 0.8 * g;
    wellMat.current.emissiveIntensity = 0.1 * g;
  });

  useLayoutEffect(() => {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    keys.forEach((k, i) => {
      m.compose(
        new THREE.Vector3(k.x, BASE_H + KEY_H / 2, k.z),
        q,
        new THREE.Vector3(k.w, KEY_H, k.d)
      );
      ref.current.setMatrixAt(i, m);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [keys]);

  useEffect(
    () => () => {
      geometry.dispose();
      labels.dispose();
    },
    [geometry, labels]
  );

  return (
    <group>
      {/* Recessed well the keys sit in */}
      <mesh position={[0, BASE_H + 0.0006, KB_Z0 + KB_D / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[KB_W + 0.05, KB_D + 0.05]} />
        {/* Faint white light showing between the keys */}
        <meshStandardMaterial
          ref={wellMat}
          color="#0b0c0f"
          roughness={0.9}
          emissive="#ffffff"
          emissiveIntensity={0}
        />
      </mesh>

      <instancedMesh ref={ref} args={[geometry, undefined, keys.length]}>
        <meshStandardMaterial color="#16181d" roughness={0.55} metalness={0.1} />
      </instancedMesh>

      {/* Key legends */}
      <mesh position={[0, BASE_H + KEY_H + 0.0005, KB_Z0 + KB_D / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[KB_W, KB_D]} />
        <meshBasicMaterial
          ref={labelMat}
          map={labels}
          transparent
          opacity={0.2}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function Speakers() {
  const grille = useMemo(makeGrilleTexture, []);
  useEffect(() => () => grille.dispose(), [grille]);
  const width = (W - KB_W) / 2 - 0.16;
  const x = KB_W / 2 + 0.08 + width / 2;

  return (
    <>
      {[-x, x].map((px) => (
        <mesh key={px} position={[px, BASE_H + 0.0006, KB_Z0 + KB_D / 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[width, KB_D + 0.05]} />
          <meshStandardMaterial
            color="#050607"
            roughness={0.9}
            alphaMap={grille}
            transparent
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

function Laptop({ src, onReady }: { src: string; onReady?: () => void }) {
  const isDark = useIsDark();
  const texture = useTexture(src);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const lid = useRef<THREE.Group>(null!);
  const glow = useRef(0); // 0 = lid closed, 1 = fully open

  // Start closed. Set once here (not as a prop) so a re-render, such as a
  // theme change, doesn't snap the lid shut again.
  useLayoutEffect(() => {
    lid.current.rotation.x = CLOSED_ANGLE;
  }, []);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // The lid opens once the image has loaded.
  useFrame((_, delta) => {
    lid.current.rotation.x = THREE.MathUtils.damp(
      lid.current.rotation.x,
      OPEN_ANGLE,
      2.2,
      Math.min(delta, 0.05)
    );
    glow.current = THREE.MathUtils.clamp(
      (CLOSED_ANGLE - lid.current.rotation.x) / (CLOSED_ANGLE - OPEN_ANGLE),
      0,
      1
    );
  });

  const shell = isDark ? "#6b7280" : "#c9ced6";
  const shellMat = <meshStandardMaterial color={shell} metalness={0.85} roughness={0.28} />;
  const trackpadZ = KB_Z0 + KB_D + (D / 2 - (KB_Z0 + KB_D)) / 2;

  return (
    <group position={[0, -0.85, 0.2]}>
      {/* Base */}
      <RoundedBox args={[W, BASE_H, D]} radius={0.04} smoothness={4} position={[0, BASE_H / 2, 0]}>
        {shellMat}
      </RoundedBox>

      <Keyboard glow={glow} />
      <Speakers />

      {/* Trackpad */}
      <RoundedBox
        args={[1.35, 0.004, 0.72]}
        radius={0.002}
        smoothness={2}
        position={[0, BASE_H + 0.001, trackpadZ]}
      >
        <meshStandardMaterial color={isDark ? "#565d69" : "#b9bfc8"} metalness={0.6} roughness={0.38} />
      </RoundedBox>

      {/* Thumb notch on the front edge */}
      <mesh position={[0, BASE_H * 0.62, D / 2 + 0.0015]}>
        <planeGeometry args={[0.55, 0.025]} />
        <meshStandardMaterial color={isDark ? "#3b4049" : "#9aa1ab"} roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Ports on the left side */}
      {[-0.35, -0.15].map((z) => (
        <mesh key={z} position={[-W / 2 - 0.0015, BASE_H / 2, z]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.1, 0.03]} />
          <meshStandardMaterial color="#0b0c0f" roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[W / 2 + 0.0015, BASE_H / 2, -0.25]} rotation={[0, Math.PI / 2, 0]}>
        <circleGeometry args={[0.018, 20]} />
        <meshStandardMaterial color="#0b0c0f" roughness={0.8} />
      </mesh>

      {/* Rubber feet */}
      {[
        [-W / 2 + 0.25, -D / 2 + 0.25],
        [W / 2 - 0.25, -D / 2 + 0.25],
        [-W / 2 + 0.25, D / 2 - 0.25],
        [W / 2 - 0.25, D / 2 - 0.25],
      ].map(([x, z]) => (
        <mesh key={`${x}${z}`} position={[x, -0.008, z]}>
          <cylinderGeometry args={[0.07, 0.07, 0.016, 24]} />
          <meshStandardMaterial color="#111" roughness={0.9} />
        </mesh>
      ))}

      {/* Hinge */}
      <mesh position={[0, BASE_H, -D / 2 + 0.04]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, W * 0.78, 24]} />
        <meshStandardMaterial color={isDark ? "#2b2f36" : "#8d939d"} metalness={0.7} roughness={0.35} />
      </mesh>

      {/* Lid, hinged at the back edge of the base */}
      <group ref={lid} position={[0, BASE_H, -D / 2 + 0.05]}>
        <RoundedBox
          args={[W, LID_H, LID_T]}
          radius={0.025}
          smoothness={4}
          position={[0, LID_H / 2, -LID_T / 2]}
        >
          {shellMat}
        </RoundedBox>

        {/* Bezel */}
        <mesh position={[0, LID_H / 2, 0.001]}>
          <planeGeometry args={[W - 0.06, LID_H - 0.06]} />
          <meshStandardMaterial color="#08090b" roughness={0.35} metalness={0.2} />
        </mesh>

        {/* Webcam */}
        <mesh position={[0, LID_H - 0.05, 0.002]}>
          <circleGeometry args={[0.014, 24]} />
          <meshStandardMaterial color="#1a2433" roughness={0.15} metalness={0.5} />
        </mesh>
        <mesh position={[0.004, LID_H - 0.046, 0.0025]}>
          <circleGeometry args={[0.004, 12]} />
          <meshBasicMaterial color="#3b5577" />
        </mesh>

        {/* Screen: unlit so the image keeps its real colours */}
        <mesh position={[0, LID_H / 2 + 0.03, 0.003]}>
          <planeGeometry args={[SCREEN_W, SCREEN_H]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>

        {/* Faint glass reflection over the screen */}
        <mesh position={[0, LID_H / 2 + 0.03, 0.004]}>
          <planeGeometry args={[SCREEN_W, SCREEN_H]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.04}
            metalness={1}
            roughness={0.05}
            depthWrite={false}
          />
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
