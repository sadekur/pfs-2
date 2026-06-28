"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroGlow() {
  const containerRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 55, damping: 22 });
  const y = useSpring(rawY, { stiffness: 55, damping: 22 });

  useEffect(() => {
    const section = containerRef.current?.parentElement;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    rawX.set(rect.width / 2);
    rawY.set(rect.height / 2);

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      rawX.set(e.clientX - r.left);
      rawY.set(e.clientY - r.top);
    };

    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* ── Static corner blobs ── */}

      {/* Top-left: purple blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          left: "-80px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.15) 45%, transparent 70%)",
          filter: "blur(72px)",
          borderRadius: "50%",
        }}
      />

      {/* Top-right: pink-magenta accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60px",
          right: "-60px",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.28) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)",
          filter: "blur(64px)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom-left: deep indigo */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-60px",
          left: "5%",
          width: "340px",
          height: "340px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom-right: subtle violet */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-40px",
          right: "8%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          filter: "blur(56px)",
          borderRadius: "50%",
        }}
      />

      {/* ── Mouse-tracking interactive glow ── */}

      {/* Outer ambient */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
        className="absolute rounded-full pointer-events-none"
      />

      {/* Inner bright core */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0.06) 55%, transparent 70%)",
          filter: "blur(20px)",
        }}
        className="absolute rounded-full pointer-events-none"
      />
    </div>
  );
}
