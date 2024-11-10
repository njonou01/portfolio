import React, { useState } from "react";
import profilImage from "../../../../assets/images/profil1.png";
const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "profile" | "goals">(
    "personal"
  );

  const personalTraits = [
    {
      label: "Approche",
      text: "Créatif & Innovant",
      icon: "💡",
      position: {
        top: "5%",
        right: "5%",
        rotate: "15deg",
      },
    },
    {
      label: "Mindset",
      text: "Toujours apprendre",
      icon: "🎯",
      position: {
        top: "45%",
        left: "1rem",
        rotate: "-2deg",
      },
    },
    {
      label: "Valeurs",
      text: "Détermination",
      icon: "⭐",
      position: {
        top: "75%",
        right: "1rem",
        rotate: "2deg",
      },
    },
  ];

  const tabContent = {
    personal: {
      title: "Personnel",
      subtitle: "Mon Histoire",
      description: `Passionné par l'innovation et la technologie depuis mon plus jeune âge,
                   j'ai toujours été fasciné par la façon dont nous pouvons utiliser ces outils
                   pour créer un impact positif. Mon parcours m'a permis de développer une
                   approche unique, combinant créativité et rigueur analytique.`,
      highlights: [
        {
          title: "Début de l'aventure",
          text: "Découverte de la programmation et de l'IA",
          icon: "🚀",
        },
        {
          title: "Formation",
          text: "Développement de compétences techniques",
          icon: "📚",
        },
        {
          title: "Vision",
          text: "Création de solutions innovantes",
          icon: "🔮",
        },
      ],
    },
    profile: {
      title: "Profil",
      subtitle: "Ce qui me définit",
      hobbies: [
        {
          name: "Lecture",
          description:
            "Passionné par les livres de développement personnel et d'innovation",
          icon: "📚",
        },
        {
          name: "Sport",
          description: "Le sport comme source d'énergie et de discipline",
          icon: "⚡",
        },
        {
          name: "Musique",
          description: "Source d'inspiration et de créativité",
          icon: "🎵",
        },
        {
          name: "Voyage",
          description: "Découvrir de nouvelles perspectives",
          icon: "✈️",
        },
      ],
      personality: [
        "Créatif et innovant dans l'approche des défis",
        "Passionné par l'apprentissage continu",
        "Orienté solutions et résultats",
        "Esprit d'équipe et collaboration",
      ],
    },
    goals: {
      title: "Objectifs",
      subtitle: "Mes Ambitions",
      vision: `Créer un impact significatif à travers l'innovation technologique,
              tout en continuant à grandir personnellement et professionnellement.`,
      shortTerm: [
        {
          goal: "Excellence Technique",
          description: "Maîtriser les dernières innovations",
        },
        {
          goal: "Leadership",
          description: "Développer mes compétences en gestion d'équipe",
        },
      ],
      longTerm: [
        {
          goal: "Innovation",
          description: "Créer des solutions qui font la différence",
        },
        {
          goal: "Impact",
          description: "Contribuer positivement à la société",
        },
      ],
    },
  };

  const tabs = [
    { id: "personal", label: "Personnel", icon: "👤" },
    { id: "profile", label: "Profil", icon: "🎯" },
    { id: "goals", label: "Objectifs", icon: "✨" },
  ] as const;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                À propos de Moi
              </span>
            </h2>

            <div className="flex justify-center mt-8">
              <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                              flex items-center gap-2
                              ${
                                activeTab === tab.id
                                  ? "bg-indigo-600 text-white shadow-lg"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                              }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/2 lg:sticky lg:top-24">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl" />

                <div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden
                             border border-gray-200 dark:border-gray-700
                             shadow-2xl dark:shadow-gray-900/20"
                >
                  <img
                    src={profilImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent" />

                  {personalTraits.map((trait) => {
                    const positions = trait.position;

                    return (
                      <div
                        key={trait.label}
                        className="absolute bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm
                                 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                                 p-3 transform hover:scale-105 transition-all duration-300"
                        style={{
                          top: positions.top,
                          ...(positions.right
                            ? { right: positions.right }
                            : { left: positions.left }),
                          transform: `rotate(${positions.rotate})`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{trait.icon}</span>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {trait.label}
                            </p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {trait.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              {activeTab === "personal" && (
                <div className="space-y-6">
                  <div
                    className="bg-white dark:bg-gray-800 rounded-xl p-8
                               border border-gray-200 dark:border-gray-700
                               shadow-lg dark:shadow-gray-900/10"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tabContent.personal.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {tabContent.personal.description}
                    </p>
                    <div className="grid gap-6">
                      {tabContent.personal.highlights.map(
                        (highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4
                                   bg-gray-50 dark:bg-gray-700/50 rounded-xl
                                   hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
                                   transition-colors duration-300"
                          >
                            <span className="text-2xl">{highlight.icon}</span>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {highlight.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {highlight.text}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div
                    className="bg-white dark:bg-gray-800 rounded-xl p-8
                               border border-gray-200 dark:border-gray-700
                               shadow-lg dark:shadow-gray-900/10"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      {tabContent.profile.subtitle}
                    </h3>

                    <div className="space-y-8">
                      <div className="grid grid-cols-2 gap-4">
                        {tabContent.profile.hobbies.map((hobby, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl
                                     hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
                                     transition-colors duration-300"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">{hobby.icon}</span>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {hobby.name}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {hobby.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                          Traits de personnalité
                        </h4>
                        <div className="grid gap-3">
                          {tabContent.profile.personality.map(
                            (trait, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3
                                       bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                              >
                                <span className="text-indigo-500">•</span>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {trait}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "goals" && (
                <div className="space-y-6">
                  <div
                    className="bg-white dark:bg-gray-800 rounded-xl p-8
                               border border-gray-200 dark:border-gray-700
                               shadow-lg dark:shadow-gray-900/10"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tabContent.goals.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {tabContent.goals.vision}
                    </p>

                    <div className="space-y-8">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                          Objectifs à court terme
                        </h4>
                        <div className="space-y-4">
                          {tabContent.goals.shortTerm.map((goal, index) => (
                            <div
                              key={index}
                              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl
                                       hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
                                       transition-colors duration-300"
                            >
                              <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                                {goal.goal}
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {goal.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                          Vision à long terme
                        </h4>
                        <div className="space-y-4">
                          {tabContent.goals.longTerm.map((goal, index) => (
                            <div
                              key={index}
                              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl
                                       hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
                                       transition-colors duration-300"
                            >
                              <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                                {goal.goal}
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {goal.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl
                           shadow-lg shadow-indigo-500/20
                           hover:bg-indigo-700 hover:shadow-indigo-500/30
                           hover:-translate-y-0.5
                           transition-all duration-300"
                >
                  Me Contacter
                </a>
                <a
                  href="/cv.pdf"
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl
                           text-gray-900 dark:text-white
                           border border-gray-200 dark:border-gray-700
                           shadow-lg dark:shadow-gray-900/10
                           hover:border-indigo-500 dark:hover:border-indigo-400
                           hover:-translate-y-0.5
                           transition-all duration-300"
                >
                  Mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
