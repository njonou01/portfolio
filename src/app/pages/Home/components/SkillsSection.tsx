import React, { useState } from "react";

interface Tool {
  name: string;
  logo: string;
}

interface Skill {
  name: string;
  description: string;
  tools: Tool[];
  projects?: string[];
}

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
  color: string;
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Infrastructure cloud et automatisation",
      color: "from-sky-500 to-blue-500",
      skills: [
        {
          name: "Cloud Services",
          description: "Services et infrastructure cloud",
          tools: [
            {
              name: "AWS",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            },
            {
              name: "GCP",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            },
            {
              name: "Azure",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            },
            {
              name: "Heroku",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
            },
          ],
          projects: ["Déploiement d'applications", "Infrastructure as Code"],
        },
        {
          name: "DevOps Tools",
          description: "Outils d'automatisation et déploiement",
          tools: [
            {
              name: "Docker",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
              name: "Kubernetes",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
            },
            {
              name: "Jenkins",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
            },
            {
              name: "GitLab",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
            },
          ],
          projects: ["CI/CD Pipeline", "Containerisation"],
        },
        {
          name: "Infrastructure & Monitoring",
          description: "Gestion et surveillance d'infrastructure",
          tools: [
            {
              name: "Terraform",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
            },
            {
              name: "Ansible",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
            },
            {
              name: "Grafana",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
            },
            {
              name: "Prometheus",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
            },
          ],
          projects: ["Infrastructure Monitoring", "Automatisation"],
        },
        {
          name: "Version Control & Tools",
          description: "Gestion de version et outils de développement",
          tools: [
            {
              name: "Git",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "GitHub",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
              name: "VS Code",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },
            {
              name: "Bash",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
            },
          ],
          projects: ["Gestion de versions", "Scripts d'automatisation"],
        },
      ],
    },
    {
      title: "Data Science & ML",
      icon: "🤖",
      description: "Analyse de données et machine learning",
      color: "from-blue-500 to-indigo-500",
      skills: [
        {
          name: "Machine Learning",
          description: "Développement de modèles prédictifs et classification",
          tools: [
            {
              name: "TensorFlow",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
            },
            {
              name: "Scikit-learn",
              logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            },
            {
              name: "Python",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "Pandas",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
            },
          ],
          projects: ["Système de recommandation", "Analyse de sentiments"],
        },
        {
          name: "Deep Learning",
          description: "Réseaux de neurones et apprentissage profond",
          tools: [
            {
              name: "PyTorch",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
            },
            { name: "Keras", logo: "https://keras.io/img/logo.png" },
            {
              name: "NumPy",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            },
          ],
          projects: ["Classification d'images", "NLP"],
        },
      ],
    },
    {
      title: "Développement Web",
      icon: "🌐",
      description: "Développement frontend et backend",
      color: "from-violet-500 to-purple-500",
      skills: [
        {
          name: "Frontend",
          description: "Interfaces utilisateur modernes",
          tools: [
            {
              name: "React",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "TypeScript",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "Next.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Tailwind CSS",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            },
          ],
          projects: ["Portfolio", "Dashboard"],
        },

        {
          name: "Backend",
          description: "APIs et services web",
          tools: [
            {
              name: "Node.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "Laravel",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
            },
            {
              name: "Django",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            },
          ],
          projects: ["API REST", "Authentification"],
        },
      ],
    },
    {
      title: "Bases de Données",
      icon: "🗄️",
      description: "Gestion et modélisation des données",
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "SQL",
          description: "Bases de données relationnelles",
          tools: [
            {
              name: "MySQL",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
              name: "PostgreSQL",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
              name: "SQLite",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            },
          ],
          projects: ["Modélisation BDD", "Optimisation requêtes"],
        },
        {
          name: "NoSQL",
          description: "Bases de données non-relationnelles",
          tools: [
            {
              name: "MongoDB",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Redis",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            },
            {
              name: "Neo4j",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
            },
          ],
          projects: ["Base graphe", "Cache distribué"],
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Compétences
          </span>{" "}
          <span className="text-gray-900 dark:text-white">Techniques</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Technologies et outils maîtrisés à travers mes projets et ma formation
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              {skillCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full group p-6 rounded-xl transition-all duration-300
                    ${
                      activeCategory === idx
                        ? "bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 scale-[1.02]"
                        : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/10"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative bg-white dark:bg-gray-800 rounded-xl 
                    border border-gray-100 dark:border-gray-700
                    shadow-md dark:shadow-gray-900/10 p-6
                    transition-all duration-300 
                    hover:shadow-xl dark:hover:shadow-gray-900/20
                    hover:border-gray-200 dark:hover:border-gray-600
                    ${hoveredSkill === skill.name ? "scale-[1.02]" : ""}`}
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {skill.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                        Technologies
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {skill.tools.map((tool, toolIdx) => (
                          <div
                            key={toolIdx}
                            className="group flex flex-col items-center"
                          >
                            <div
                              className="w-12 h-12 rounded-xl 
                                bg-gray-50 dark:bg-gray-700/50
                                border border-gray-100 dark:border-gray-600
                                shadow-sm dark:shadow-gray-900/10
                                flex items-center justify-center p-2
                                group-hover:scale-110 group-hover:-translate-y-1
                                group-hover:shadow-md dark:group-hover:shadow-gray-900/20
                                transition-all duration-300"
                            >
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                              {tool.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {skill.projects && (
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Projets réalisés
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects.map((project, projectIdx) => (
                            <span
                              key={projectIdx}
                              className="text-sm px-3 py-1.5
                                text-gray-700 dark:text-gray-300
                                bg-gray-100 dark:bg-gray-700/50
                                border border-gray-200 dark:border-gray-600
                                hover:border-indigo-300 dark:hover:border-indigo-700
                                hover:bg-gray-50 dark:hover:bg-gray-700
                                rounded-full transition-colors duration-200"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

export default SkillsSection;
