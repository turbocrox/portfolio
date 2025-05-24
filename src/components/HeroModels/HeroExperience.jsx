import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";


// Animated Scene Component
const AnimatedScene = ({ isMobile, screensRef, materials }) => {
  const groupRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;

    if (groupRef.current) {
      // Smooth rotation animation
      groupRef.current.rotation.y = -Math.PI / 4 + Math.sin(timeRef.current * 0.5) * 0.2;

      // Gentle up and down movement
      groupRef.current.position.y = -3.5 + Math.sin(timeRef.current * 0.8) * 0.3;

      // Subtle scale breathing effect
      const breathScale = 1 + Math.sin(timeRef.current * 1.2) * 0.05;
      const baseScale = isMobile ? 0.7 : 1;
      groupRef.current.scale.setScalar(baseScale * breathScale);
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.2 :1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
     
      {/* Keep this for bloom targeting or future visual effects */}
     
    </group>
  );
};

// Animated Camera Component
const AnimatedCamera = ({ isTablet }) => {
  const controlsRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;

    if (controlsRef.current && !isTablet) {
      // Smooth zoom in and out
      const zoomFactor = 15 + Math.sin(timeRef.current * 0.3) * 3;
      state.camera.position.setLength(zoomFactor);

      // Gentle orbital movement
      const orbitalAngle = timeRef.current * 0.1;
      state.camera.position.x = Math.sin(orbitalAngle) * zoomFactor * 0.3;
      state.camera.position.z = Math.cos(orbitalAngle) * zoomFactor;

      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}

    />
  );
};

const HeroExperience = () => {
  const isTablet =  useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile =  useMediaQuery({ query: "(max-width: 768px)" });
  const screensRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Custom materials
  const materials = {
    curtainMaterial: new THREE.MeshPhongMaterial({ color: "#d90429" }),
    bodyMaterial: new THREE.MeshPhongMaterial({ color: "#ffffff" }),
    tableMaterial: new THREE.MeshPhongMaterial({ color: "#582f0e" }),
    pillowMaterial: new THREE.MeshPhongMaterial({ color: "#8338ec" }),
    chairMaterial: new THREE.MeshPhongMaterial({ color: "#000" }),
  };

  return (
    <div className="relative w-full h-full">
      {/* Spline Viewer */}
      <spline-viewer
        className="absolute top-0 left-0 w-full h-full"
        url="https://prod.spline.design/mDea32py0dqSX0aX/scene.splinecode"
      ></spline-viewer>

      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* Animated 3D Scene */}
        <AnimatedScene 
          isMobile={isMobile} 
          screensRef={screensRef} 
          materials={materials} 
        />

        {/* Lighting */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={2} />
      
 
        {/* Animated Camera Controls */}
        <AnimatedCamera isTablet={isTablet} />
      </Canvas>
    </div>
  );
};

export default HeroExperience;

