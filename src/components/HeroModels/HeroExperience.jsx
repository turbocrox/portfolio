import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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

  // Always render the Spline viewer to ensure the 3D model appears
  return (
    <div className="relative w-full h-full">
      <spline-viewer
        className="absolute top-0 left-0 w-full h-full"
        url="https://prod.spline.design/mDea32py0dqSX0aX/scene.splinecode"
      ></spline-viewer>
    </div>
  );
};

export default HeroExperience;
