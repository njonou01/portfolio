import React from 'react';
import notIcon from '../assets/img/pngtree-project-management-png-image_5687733.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string | null;
  date: string;
}
const projectsData : Project[] = [
  {
    title: "Onsebat - Application de Mise en Relation entre Artisans et Particuliers",
    description: "Développement du front-end en HTML, CSS, TailwindCSS, et VanillaJS puis ReactJS. Internationalisation en 7 langues. Recherche de professionnels qualifiés.",
    technologies: ["HTML", "CSS", "TailwindCSS", "vanillaJS", "ReactJS", "Django", "Gabarit Django", "I18N", "PIP", "MistralAI"],
    link: "https://onsebat.onrender.com/en/",
    image: null,
    date: "2023",
  },
  {
    title: "Réseaux Social étudiant - SIRIUS",
    description: "Conception et développement d'un système de recommandation et d'une interface utilisateur en JavaFX. Collaboration étroite avec l'équipe pour définir et prioriser les tâches. Participation active à la capitalisation technique et fonctionnelle.",
    technologies: ["JavaFX", "Java", "SQL", "Git", "Jenkins", "Script bash"],
    image: null,
    date: "2022",
    link: ''
  },
  {
    title: "Site de présentation et vente de Montres de luxe",
    description: "Création d'une base de données via les informations recueillies avec le web scraping pour récupérer les images et les noms des montres. Utilisation de SQLAlchemy pour les requêtes. API avec Flask, frontend avec Tailwind CSS et JavaScript vanilla.",
    technologies: ["SQLAlchemy", "Flask", "TailwindCSS", "JavaScript vanilla"],
    image: null,
    date: "2022",
    link: ''
  },
  {
    title: "Perceptron Simple et Multicouche en C++ from scratch",
    description: "Développement de perceptrons simples et multicouches en C++ sans utiliser de bibliothèques externes. Implémentation des algorithmes d'apprentissage et de propagation pour les réseaux de neurones.",
    technologies: ["C++"],
    image: null,
    date: "2022",
    link: ''
  }
];

const Projects: React.FC = () => {


  return (
    <section id='projects' className="mt-32 container mx-auto">
      <div className='opacity-100 text-center transform-none'>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Projets Personnels et Académiques</h2>
        </div>
      </div>
      <div className='opacity-100 transform-none'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {projectsData.map((project, index) => (
            <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200">
              <button className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                <img src={project.image ?? notIcon } alt={`${project.title} logo`} width="50" height="50" decoding="async" data-nimg="1" className="object-cover text-transparent duration-300" />
              </button>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{project.date}</time>
                {project.link && <a href={project.link} className="text-blue-500 underline mt-2">Voir plus</a>}
                <div>
                  <h4 className="font-semibold py-2">Description:</h4>
                  <p className="ml-4 tracking-tight dark:text-zinc-400 text-zinc-600 ">{project.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold py-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 ml-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tech}</span>
                    ))}
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

export default Projects;
