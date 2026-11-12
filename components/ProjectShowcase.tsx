"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { prefersReducedMotion, supportsWebGL } from "@/lib/useIsDark";

const LaptopScene = dynamic(() => import("./three/LaptopScene"), { ssr: false });

/**
 * Case-study cover. The flat screenshot renders first (good for LCP and for
 * visitors without WebGL or with reduced motion), then fades into an
 * interactive 3D laptop showing the same screenshot.
 */
export default function ProjectShowcase({ src, alt }: { src: string; alt: string }) {
  const [enable3d, setEnable3d] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    setEnable3d(!prefersReducedMotion() && supportsWebGL());
  }, []);

  return (
    <figure className="relative mt-10">
      <div className="relative aspect-[16/10]">
        <div
          className={`absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 transition-all duration-700 dark:border-slate-800 dark:shadow-black/40 ${
            ready ? "pointer-events-none scale-95 opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover object-top"
          />
        </div>

        {enable3d && (
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <LaptopScene src={src} onReady={onReady} />
          </div>
        )}
      </div>

      {ready && (
        <figcaption className="mt-2 hidden text-center text-xs text-slate-500 dark:text-slate-400 [@media(pointer:fine)]:block">
          Drag to rotate
        </figcaption>
      )}
    </figure>
  );
}
