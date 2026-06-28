"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroGlow() {
  const containerRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring makes the glow lag slightly behind the cursor — feels organic
  const x = useSpring(rawX, { stiffness: 55, damping: 22 });
  const y = useSpring(rawY, { stiffness: 55, damping: 22 });

  useEffect(() => {
    const section = containerRef.current?.parentElement;
    if (!section) return;

    // Default position: center of the section
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
      {/* Large outer ambient glow */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
        className="absolute rounded-full pointer-events-none"
      />
      {/* Bright inner core */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.32) 0%, rgba(139,92,246,0.08) 55%, transparent 70%)",
          filter: "blur(20px)",
        }}
        className="absolute rounded-full pointer-events-none"
      />
    </div>
  );
}
