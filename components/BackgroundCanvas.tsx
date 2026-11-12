"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { prefersReducedMotion, supportsWebGL } from "@/lib/useIsDark";

// three.js is loaded in its own chunk after the page is interactive, so it
// never blocks the first paint.
const ParticleField = dynamic(() => import("./three/ParticleField"), { ssr: false });

export default function BackgroundCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !supportsWebGL()) return;
    const start = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 300);
    return () => clearTimeout(id);
  }, []);

  if (!enabled) return null;
  return (
    <div className="absolute inset-0 animate-fade-in">
      <ParticleField />
    </div>
  );
}
