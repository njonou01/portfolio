import React, { useState, useEffect, useRef } from "react";

interface Education {
  id: number;
  title: string;
  school: string;
  period: string;
  location: string;
  description: string;
  specializations: string[];
  skills: string[];
  status: "En cours" | "Diplômé";
  syllabusUrl: string;
}

interface EducationSectionProps {
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const education: Education[] = [
    {
      id: 1,
      title: "Diplôme d'Ingénieur",
      school: "École Publique d'Ingénieur de Santé et du Numérique",
      period: "Depuis sept. 2024",
      location: "Créteil, France",
      description: `Formation d'excellence en ingénierie numérique spécialisée dans l'IA et la santé. 
                   Programme axé sur l'application de l'intelligence artificielle dans le domaine médical,
                   permettant de développer une expertise unique en analyse de données de santé.`,
      specializations: [
        "Intelligence Artificielle",
        "Logique",
        "Recherche Opérationnelle",
      ],
      skills: [
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "Réseaux de Neurones",
        "Analyse Prédictive",
        "Data Mining",
      ],
      status: "En cours",
      syllabusUrl: "#",
    },
    {
      id: 2,
      title: "Licence en Informatique",
      school: "Université de Yaoundé 1",
      period: "2019 - 2022",
      location: "Yaoundé, Cameroun",
      description: `Formation approfondie en informatique avec spécialisation en science des données 
                   et apprentissage automatique. Focus sur la pratique à travers des projets concrets
                   et des cas d'études réels.`,
      specializations: [
        "Data Science",
        "Machine Learning",
        "Analyse de données",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "SQL",
        "NoSQL",
        "Data Visualization",
      ],
      status: "Diplômé",
      syllabusUrl: "#",
    },
  ];

  return (
    <section
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Formation</span> Académique
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Un parcours d'excellence en ingénierie numérique et data science
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                       hover:shadow-xl transition-all duration-300"
            >
              <div
                onClick={() =>
                  setSelectedId(selectedId === edu.id ? null : edu.id)
                }
                className="p-6 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === "En cours"
                            ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                            : "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <i className="fas fa-calendar-alt" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <i className="fas fa-map-marker-alt" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={
                      selectedId === edu.id ? "Réduire" : "Développer"
                    }
                    className={`h-8 w-8 rounded-full flex items-center justify-center
                              transition-transform duration-300 text-gray-400 
                              hover:bg-gray-100 dark:hover:bg-gray-700/50
                              ${selectedId === edu.id ? "rotate-180" : ""}`}
                  >
                    <i className="fas fa-chevron-down" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${
                    selectedId === edu.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {edu.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Compétences clés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 
                                     text-primary-600 dark:text-primary-400 rounded-lg text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={edu.syllabusUrl}
                      className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 
                               bg-primary-600 text-white rounded-xl hover:bg-primary-700 
                               transition-all duration-300 group"
                    >
                      <i
                        className="fas fa-file-download mr-2 
                                  group-hover:transform group-hover:-translate-y-1 
                                  transition-transform duration-300"
                      />
                      Télécharger le Syllabus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
