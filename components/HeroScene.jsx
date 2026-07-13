"use client";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Stars } from "@react-three/drei";

function DistortedBlob() {
  const meshRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;

    const targetX = mouse.current.y * 0.4;
    const targetY = mouse.current.x * 0.4;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (targetY - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={1.6}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.3}
        distort={0.45}
        speed={1.6}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#8b5cf6" />
        <Stars radius={30} depth={20} count={1200} factor={2} saturation={0} fade speed={0.5} />
        <DistortedBlob />
      </Canvas>
    </div>
  );
}
