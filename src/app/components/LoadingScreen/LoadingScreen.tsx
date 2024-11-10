import React, { useEffect, useState } from "react";

interface LoadingPageProps {
  minLoadingTime?: number;
}

const techLogos = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "AWS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "TensorFlow",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Numpy",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "FastAPI",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Tailwind",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const skills = [
  { title: "Machine Learning Engineer", icon: "🤖" },
  { title: "Data Scientist", icon: "📊" },
  { title: "Full Stack Developer", icon: "💻" },
];

const displayedTechs = [
  { name: "Python", logo: techLogos.find((t) => t.name === "Python")?.url },
  { name: "React", logo: techLogos.find((t) => t.name === "React")?.url },
  { name: "AWS", logo: techLogos.find((t) => t.name === "AWS")?.url },
  {
    name: "TensorFlow",
    logo: techLogos.find((t) => t.name === "TensorFlow")?.url,
  },
];

const loadingStates = [
  { text: "Initialisation...", icon: "⚡️" },
  { text: "Chargement des modules...", icon: "📦" },
  { text: "Configuration de l'environnement...", icon: "⚙️" },
  { text: "Finalisation...", icon: "✨" },
];

interface FloatingIcon {
  id: number;
  logo: string;
  x: number;
  y: number;
  scale: number;
  speed: number;
  direction: { x: number; y: number };
  rotation: number;
  opacity: number;
}

const createFloatingIcon = (id: number): FloatingIcon => {
  const randomLogo = techLogos[Math.floor(Math.random() * techLogos.length)];
  return {
    id,
    logo: randomLogo.url,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.3 + Math.random() * 0.4,
    speed: 0.2 + Math.random() * 0.3,
    direction: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    },
    rotation: Math.random() * 360,
    opacity: 0.1 + Math.random() * 0.2,
  };
};

const LoadingScreen: React.FC<LoadingPageProps> = ({
  minLoadingTime = 2000,
}) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentState, setCurrentState] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const icons = Array.from({ length: 25 }, (_, i) => createFloatingIcon(i));
    setFloatingIcons(icons);

    let animationFrameId: number;
    let lastTime = Date.now();

    const updateIcons = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setFloatingIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.direction.x * icon.speed * deltaTime * 30;
          let newY = icon.y + icon.direction.y * icon.speed * deltaTime * 30;
          const newDirection = { ...icon.direction };

          if (newX < 0 || newX > 100) {
            newDirection.x *= -1;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY < 0 || newY > 100) {
            newDirection.y *= -1;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            direction: newDirection,
            rotation: (icon.rotation + icon.speed * deltaTime * 50) % 360,
          };
        })
      );

      animationFrameId = requestAnimationFrame(updateIcons);
    };

    animationFrameId = requestAnimationFrame(updateIcons);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / minLoadingTime) * 100, 100);

      setLoadingProgress(progress);
      setCurrentState(
        Math.min(
          Math.floor((progress / 100) * loadingStates.length),
          loadingStates.length - 1
        )
      );

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setShowLoading(false), 300);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [minLoadingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-500/[0.05] dark:bg-grid-gray-400/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-indigo-500/[0.07]" />

      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute transition-transform pointer-events-none"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              transform: `translate(-50%, -50%) scale(${icon.scale}) rotate(${icon.rotation}deg)`,
              opacity: icon.opacity,
            }}
          >
            <img
              src={icon.logo}
              alt=""
              loading="lazy"
              className="w-12 h-12 object-contain dark:filter dark:brightness-[0.3]"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className="relative w-[90%] max-w-md mx-auto p-6">
        <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 blur-3xl rounded-full" />

        <div
          className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl
                      border border-gray-100 dark:border-gray-700
                      shadow-2xl dark:shadow-black/20 p-6"
        >
          <div className="text-center mb-8">
            <div className="inline-block relative mb-2">
              <div
                className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 
                            bg-clip-text text-transparent"
              >
                GN.
              </div>
            </div>
            <div className="h-6 overflow-hidden">
              <div
                className="transition-transform duration-500"
                style={{ transform: `translateY(-${currentIndex * 24}px)` }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="h-6 flex items-center justify-center gap-2 text-sm"
                  >
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-2">
              <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700/50 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-25 bg-[length:20px_20px]
                             bg-[linear-gradient(45deg,rgba(0,0,0,.1)25%,transparent_25%,transparent_50%,rgba(0,0,0,.1)50%,rgba(0,0,0,.1)75%,transparent_75%)]
                             animate-[move-bg_1s_linear_infinite]"
                />
              </div>
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 
                          transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              >
                <div
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full 
                              bg-white dark:bg-gray-800 border-2 border-indigo-500
                              shadow-lg shadow-indigo-500/50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm px-1">
              <div className="flex items-center gap-2">
                <span className="animate-spin">
                  {loadingStates[currentState].icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  {loadingStates[currentState].text}
                </span>
              </div>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                {Math.round(loadingProgress)}%
              </span>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              {displayedTechs.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-1"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 
                               border border-gray-200 dark:border-gray-600
                               flex items-center justify-center p-2
                               transform hover:scale-110 transition-transform"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain dark:filter dark:brightness-200"
                    />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
