"use client";
import { useEffect, useRef } from "react";

const MIN_PIXEL = 1;
const MAX_PIXEL = 26;
const MAX_DISTANCE = 380;
const EASE = 0.08;

export default function PixelPhoto({ src, className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const smallCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const pixelSize = useRef(MAX_PIXEL);
  const targetPixelSize = useRef(MAX_PIXEL);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    smallCanvasRef.current = document.createElement("canvas");

    const img = new Image();
    img.src = src;
    imgRef.current = img;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let rafId;
    const tick = () => {
      const wrap = wrapRef.current;
      if (wrap) {
        const rect = wrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(mouse.current.x - cx, mouse.current.y - cy);
        const t = Math.min(1, Math.max(0, dist / MAX_DISTANCE));
        targetPixelSize.current = MIN_PIXEL + t * (MAX_PIXEL - MIN_PIXEL);
      }

      pixelSize.current += (targetPixelSize.current - pixelSize.current) * EASE;
      draw();
      rafId = requestAnimationFrame(tick);
    };

    const draw = () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img || !img.complete || !img.naturalWidth) return;

      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      // object-fit: cover, object-position: top
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

      const size = pixelSize.current;
      const pw = Math.max(1, Math.round(w / size));
      const ph = Math.max(1, Math.round(h / size));

      const small = smallCanvasRef.current;
      small.width = pw;
      small.height = ph;
      const sctx = small.getContext("2d");
      sctx.imageSmoothingEnabled = true;
      sctx.clearRect(0, 0, pw, ph);
      sctx.drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph);

      ctx.imageSmoothingEnabled = size < 1.5;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(small, 0, 0, pw, ph, 0, 0, w, h);
    };

    img.onload = () => draw();
    rafId = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => draw());
    if (wrapRef.current) ro.observe(wrapRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
