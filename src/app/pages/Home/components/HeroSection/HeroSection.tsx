import { HeroProps } from "@/types/props.type";
import React, { useEffect, useRef, useState } from "react";

const heroData = {
  introduction: {
    greeting: "👋 Bonjour, je suis",
    name: "Gaby NJONOU ",
    description:
      "Passionné par #l'IA et la #DataScience, je transforme les #données en solutions #innovantes.",
  },

  annunces: [
    {
      title: "Alternance",
      details: "Disponible immédiatement",
      emoji: "🎓",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Stage",
      details: "4 mois minimum dès Mai 2025",
      emoji: "💼",
      gradient: "from-blue-500 to-blue-700",
    },
  ],

  socialLinks: [
    {
      icon: "fab fa-linkedin",
      url: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: "fab fa-github",
      url: "#",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: "fab fa-twitter",
      url: "#",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: "fab fa-instagram",
      url: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
  ],

  badges: [
    {
      icon: "fab fa-python",
      title: "Python",
      subtitle: "Data Science",
      gradient: "from-blue-500 to-blue-700",
      position: "-right-6 top-20",
    },
    {
      icon: "fab fa-aws",
      title: "AWS",
      subtitle: "Cloud",
      gradient: "from-orange-500 to-orange-700",
      position: "right-0 bottom-32",
    },
    {
      icon: "fas fa-database",
      title: "MongoDB",
      subtitle: "NoSQL",
      gradient: "from-green-500 to-green-700",
      position: "-left-6 top-32",
    },
    {
      icon: "fas fa-brain",
      title: "Machine",
      subtitle: "Learning",
      gradient: "from-purple-500 to-purple-700",
      position: "left-0 bottom-20",
    },
  ],
};

const HeroSection: React.FC<HeroProps> = ({ imgRatio, roles, profilePath }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      const originalWidth = imageRef.current.naturalWidth;
      const originalHeight = imageRef.current.naturalHeight;

      imageRef.current.style.width = `${originalWidth * imgRatio}px`;
      imageRef.current.style.height = `${originalHeight * imgRatio}px`;
    }

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgRatio, roles.length]);

  const formatDescription = (text: string) => {
    return text.split(/(\s+)/).map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span
            key={index}
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            {word.substring(1)}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <section className="min-h-screen relative overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div>
              <h2 className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                {heroData.introduction.greeting}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                  {heroData.introduction.name}
                </span>
              </h1>
              <div className="h-12 mb-6">
                <span className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold">
                  {roles[currentRole]}
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                {formatDescription(heroData.introduction.description)}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              {heroData.annunces.map((status, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white dark:bg-gray-800 backdrop-blur-sm
                            border border-gray-200 dark:border-gray-700
                            shadow-lg dark:shadow-gray-900/10
                            rounded-2xl px-6 py-4 
                            hover:transform hover:scale-[1.02]
                            hover:shadow-xl dark:hover:shadow-gray-900/20
                            transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${status.gradient} rounded-xl 
                                   flex items-center justify-center transform transition-transform
                                   duration-300 hover:rotate-12 shadow-lg`}
                    >
                      <span className="text-2xl text-white">
                        {status.emoji}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {status.title}
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400">
                        {status.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {heroData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl
                             bg-white dark:bg-gray-800
                             border border-gray-200 dark:border-gray-700
                             shadow-md dark:shadow-gray-900/10
                             transform hover:scale-110 hover:-translate-y-1
                             transition-all duration-300
                             ${social.color} hover:text-white
                             hover:border-transparent hover:shadow-lg`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projets"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl 
                          shadow-lg shadow-indigo-600/20
                          hover:bg-indigo-700 hover:shadow-indigo-700/20 
                          transition-all duration-300 
                          transform hover:scale-105 hover:-translate-y-1"
              >
                Découvrir mon profil
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-gray-800
                          text-indigo-600 dark:text-indigo-400 rounded-xl 
                          border border-gray-200 dark:border-gray-700
                          shadow-md dark:shadow-gray-900/10
                          hover:bg-gray-50 dark:hover:bg-gray-700
                          hover:shadow-lg dark:hover:shadow-gray-900/20
                          transition-all duration-300
                          transform hover:-translate-y-1"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 dark:bg-gradient-to-br  dark:from-indigo-500/5 dark:to-blue-500/5 rounded-2xl" />
              <img
                ref={imageRef}
                src={profilePath}
                alt={heroData.introduction.name}
              />

              {heroData.badges.map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${badge.position}
                             bg-white dark:bg-gray-800
                             shadow-lg dark:shadow-gray-900/10
                             rounded-2xl p-3 transform hover:scale-105
                             hover:shadow-xl dark:hover:shadow-gray-900/20
                             transition-all duration-300 cursor-pointer
                             border border-gray-200 dark:border-gray-700`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${badge.gradient} 
                                rounded-xl flex items-center justify-center
                                shadow-lg`}
                    >
                      <i className={`${badge.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {badge.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {badge.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
