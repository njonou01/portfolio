import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: "ML" | "Data" | "Web";
  status: "Complété" | "En cours";
  demoLink?: string;
  githubLink?: string;
  image: string;
  highlights: string[];
  year: string;
  role: string;
}

interface CategoryButton {
  id: "all" | "ML" | "Data" | "Web";
  label: string;
  icon: string;
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "ML" | "Data" | "Web">("all");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Système de Recommandation ML",
      shortDescription:
        "Algorithme de recommandation intelligent pour jobs et formations",
      fullDescription:
        "Développement d'un système de recommandation avancé utilisant des techniques de deep learning pour matcher les profils avec les offres d'emploi et formations pertinentes.",
      technologies: ["Python", "TensorFlow", "AWS", "MongoDB"],
      category: "ML",
      status: "Complété",
      demoLink: "#",
      githubLink: "#",
      image: "/api/placeholder/600/400",
      highlights: [
        "Précision de 92% dans les recommandations",
        "Traitement de plus de 10K profils",
        "Architecture scalable sur AWS",
      ],
      year: "2023",
      role: "Lead Developer",
    },
    {
      id: 2,
      title: "Pipeline Data Automation",
      shortDescription:
        "Solution automatisée d'extraction et traitement de données",
      fullDescription:
        "Pipeline de données automatisé pour collecter, nettoyer et analyser des données à grande échelle.",
      technologies: ["Python", "AWS", "Docker", "Selenium"],
      category: "Data",
      status: "En cours",
      githubLink: "#",
      image: "/api/placeholder/600/400",
      highlights: [
        "Traitement de 1M+ données/jour",
        "Réduction de 70% du temps de traitement",
        "Monitoring en temps réel",
      ],
      year: "2023",
      role: "Data Engineer",
    },
    {
      id: 3,
      title: "Plateforme Full Stack",
      shortDescription: "Application web moderne et réactive",
      fullDescription:
        "Application web complète avec backend robuste et frontend moderne.",
      technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
      category: "Web",
      status: "Complété",
      demoLink: "#",
      githubLink: "#",
      image: "/api/placeholder/600/400",
      highlights: [
        "Architecture microservices",
        "Interface utilisateur responsive",
        "Tests automatisés",
      ],
      year: "2022",
      role: "Full Stack Developer",
    },
  ];

  const categories: CategoryButton[] = [
    { id: "all", label: "Tous", icon: "🎯" },
    { id: "ML", label: "Machine Learning", icon: "🤖" },
    { id: "Data", label: "Data Engineering", icon: "📊" },
    { id: "Web", label: "Web Development", icon: "🌐" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Projets</span> Remarquables
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes réalisations en machine learning, data engineering
            et développement web
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all 
                  duration-300 flex items-center gap-2 hover:-translate-y-0.5
                  ${
                    filter === cat.id
                      ? "bg-primary-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                overflow-hidden transition-all duration-300 hover:shadow-xl
                hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform 
                      duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                    duration-300"
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex justify-between items-center text-sm">
                        <span>{project.year}</span>
                        <span>{project.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        project.status === "En cours"
                          ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                          : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                        text-gray-700 dark:text-gray-300 rounded-lg transition-all 
                        duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() =>
                        setActiveProject(
                          activeProject === project.id ? null : project.id
                        )
                      }
                      className="text-primary-600 dark:text-primary-400 font-medium 
                        flex items-center gap-2 transition-all duration-300 
                        hover:gap-3"
                    >
                      En savoir plus
                      <i
                        className={`fas fa-arrow-right transition-transform duration-300
                        ${activeProject === project.id ? "rotate-90" : ""}`}
                      />
                    </button>

                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                            dark:hover:text-gray-200 transition-colors duration-300"
                        >
                          <i
                            className="fab fa-github text-xl hover:scale-110 
                            transition-transform duration-300"
                          />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                            dark:hover:text-gray-200 transition-colors duration-300"
                        >
                          <i
                            className="fas fa-external-link-alt text-xl hover:scale-110 
                            transition-transform duration-300"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300
                      ${
                        activeProject === project.id
                          ? "max-h-[500px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.fullDescription}
                      </p>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <i className="fas fa-check text-primary-500" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default ProjectsSection;
