import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "cplusplus",
    "css3",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "tailwindcss",
    "vitejs",
    "threejs",
    "React",
    "Github",
    "visualstudiocode",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/portfolio/images/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`/portfolio/images/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
