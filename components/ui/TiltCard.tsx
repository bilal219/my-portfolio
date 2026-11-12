"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Tracks the mouse over its area and exposes the tilt as CSS variables
 * (--rx, --ry, --gx, --gy). Elements with the `tilt-target` class inside it
 * (or the card itself, with `self`) rotate in 3D; `tilt-glare` adds a moving
 * highlight. Touch input and reduced motion are ignored.
 */
export default function TiltCard({
  children,
  className,
  max = 8,
  self = false,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  self?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      el.dataset.tilting = "";
    });
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.tilting;
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("tilt-root", self && "tilt-target", className)}
    >
      {children}
      {self && <span className="tilt-glare" aria-hidden="true" />}
    </div>
  );
}
