import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/portfolio/images/image.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Edemy  - A Learning Platform for Students and Instructors.
              </h2>
              <p className="text-white-50 md:text-xl">
                An website  built with  MERN stack, featuring a user-friendly interface for students and instructors. It includes a course management system,and a discussion forum to enhance the learning experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/portfolio/images/textto.jpg"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Text to Speech and Speech to Text</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/portfolio/images/optiroute.png" alt="YC Directory App" />
              </div>
              <h2>OptiRoute - Vehicle Routing and Visualization</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;