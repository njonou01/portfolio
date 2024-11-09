import React from "react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Stagiaire Machine Learning",
      company: "TOGETTECH",
      period: "Juil. 2022 - Sept. 2022",
      location: "Yaoundé, Cameroun",
      description:
        "Développement d'un algorithme de recommandation de jobs et formations",
      achievements: [
        "Mise en place de pipelines d'extraction de données automatisés",
        "Déploiement d'un script d'extraction via AWS",
        "Utilisation de Firebase, Flask, Selenium, MongoDB",
      ],
      tech: ["Python", "AWS", "MongoDB", "Selenium", "Flask"],
    },
    {
      title: "Data Scientist/ML",
      company: "Spacekola",
      period: "Juil. 2021 - Sept. 2021",
      location: "Yaoundé, Cameroun",
      description:
        "Analyse de données et visualisation pour aide à la décision",
      achievements: [
        "Analyse approfondie des données",
        "Création de visualisations pertinentes",
        "Rédaction de rapports techniques",
      ],
      tech: ["Python", "Matplotlib", "Seaborn", "Pandas"],
    },
    {
      title: "Développeur Full Stack",
      company: "Dept Informatique UY1",
      period: "Juil. 2021 - Oct. 2021",
      location: "Yaoundé, Cameroun",
      description: "Développement full stack d'une plateforme web",
      achievements: [
        "Création de templates frontend",
        "Développement d'API backend",
        "Collaboration en équipe",
      ],
      tech: ["Laravel", "MySQL", "JavaScript", "TailwindCSS"],
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          <span className="gradient-text">Parcours</span> Professionnel
        </h2>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
                            bg-gradient-to-b from-primary-500 to-primary-700"
          ></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-16 relative ${
                idx % 2 === 0
                  ? "md:ml-auto md:pl-24 md:pr-0"
                  : "md:mr-auto md:pr-24 md:pl-0"
              } md:w-1/2`}
            >
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                    w-4 h-4 bg-primary-500 rounded-full shadow-lg"
              ></div>

              <div
                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl 
                                    hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span
                    className="text-sm text-primary-500 font-medium px-3 py-1 
                                             bg-primary-50 dark:bg-primary-900/30 rounded-full"
                  >
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {exp.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-500 mb-4">{exp.location}</p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-2">▹</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 
                                                         dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
