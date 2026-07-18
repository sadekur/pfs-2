"use client";
import { useEffect, useRef } from "react";

const MAX_PIXEL = 26;
const REVEAL_DURATION = 1200; // ms

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function PixelPhoto({ src, className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const smallCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const startTimeRef = useRef(null);
  const resolvedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    smallCanvasRef.current = document.createElement("canvas");

    const img = new Image();
    img.src = src;
    imgRef.current = img;

    let rafId;

    const getCropRect = (w, h) => {
      const targetRatio = w / h;
      const srcRatio = img.naturalWidth / img.naturalHeight;
      let sx, sy, sw, sh;
      if (srcRatio > targetRatio) {
        sh = img.naturalHeight;
        sw = sh * targetRatio;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / targetRatio;
        sx = 0;
        sy = 0;
      }
      return { sx, sy, sw, sh };
    };

    const resizeCanvas = () => {
      const rect = wrapRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      return { w, h };
    };

    // Final, single-pass crisp draw straight from the source image.
    const drawSharp = () => {
      if (!img.complete || !img.naturalWidth) return;
      const { w, h } = resizeCanvas();
      const { sx, sy, sw, sh } = getCropRect(w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
    };

    const drawPixelated = (pixelSize) => {
      if (!img.complete || !img.naturalWidth) return;
      const { w, h } = resizeCanvas();
      const { sx, sy, sw, sh } = getCropRect(w, h);

      const pw = Math.max(1, Math.round(w / pixelSize));
      const ph = Math.max(1, Math.round(h / pixelSize));

      const small = smallCanvasRef.current;
      small.width = pw;
      small.height = ph;
      const sctx = small.getContext("2d");
      sctx.imageSmoothingEnabled = true;
      sctx.clearRect(0, 0, pw, ph);
      sctx.drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(small, 0, 0, pw, ph, 0, 0, w, h);
    };

    const tick = (now) => {
      if (startTimeRef.current === null) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / REVEAL_DURATION);

      if (progress >= 1) {
        resolvedRef.current = true;
        drawSharp();
        return; // reveal done, stop the loop
      }

      const eased = easeOutCubic(progress);
      const pixelSize = MAX_PIXEL - eased * (MAX_PIXEL - 1);
      drawPixelated(pixelSize);
      rafId = requestAnimationFrame(tick);
    };

    img.onload = () => {
      rafId = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(() => {
      if (resolvedRef.current) drawSharp();
    });
    ro.observe(wrapRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
