import React from 'react';
import notIcon from '../assets/img/pngtree-project-management-png-image_5687733.png';
import { projectsData } from '../data/projectsData';
import LayoutSection from './LayoutSection';


const Projects: React.FC = () => {


  return (
    <LayoutSection title="Projets Personnels et Académiques" id="projects">
      <div className='opacity-100 transform-none'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {projectsData.map((project, index) => (
            <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)]  before:bg-zinc-200">
              <button className="grid place-items-center  bg-secondary-bg border  border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                <img src={project.image ?? notIcon} alt={`${project.title} logo`} width="50" height="50" decoding="async" data-nimg="1" className="object-cover text-transparent duration-300" />
              </button>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{project.date}</time>
                {project.link && <a href={project.link} className="text-blue-500 underline mt-2">Voir plus</a>}
                <div>
                  <h4 className="font-semibold py-2">Description:</h4>
                  <p className="ml-4 tracking-tight  text-zinc-600 ">{project.description}</p>
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
    </LayoutSection>
  );
};

export default Projects;
