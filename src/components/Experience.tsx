import React from 'react';
import uy1 from '../assets/img/uy1.png';
import studentBank from '../assets/img/studentbank.png';
import toggettech from '../assets/img/togettech.jpeg';

interface ExperienceItem {
      companyName: string;
      position: string;
      startDate: string;
      endDate: string;
      description: string;
      technologies: string[];
      points: string[];
      link: string;
      image: any;
}

const experienceData: ExperienceItem[] = [
      {
            companyName: 'StudentBank',
            position: 'Fullstack Developer - Java/Angular',
            startDate: 'June 2024',
            endDate: 'Present',
            description: 'Technical design, front-end development of the application, internationalization of the application, development of REST APIs and mobile application integration, continuous integration and unit testing.',
            technologies: ['Java', 'Angular', 'REST API', 'Mobile Integration', 'CI/CD', 'Unit Testing'],
            points: [
                  'Technical design',
                  'Front-end development of the application',
                  'Internationalization of the application',
                  'Development of REST APIs',
                  'Mobile application integration',
                  'Continuous integration',
                  'Unit testing'
            ],
            link: '',
            image: studentBank
      },
      {
            companyName: 'ToGetTech & LegionWeb',
            position: 'ML engeeneer / Full Stack Developer',
            startDate: 'July 2022',
            endDate: 'September 2022',
            description: 'Design and development of a training and job recommendation algorithm, data extraction with Beautiful Soup, Scrapy, and Selenium, API integration and backend development with Flask.',
            technologies: ['Python', 'Flask', 'Beautiful Soup', 'Scrapy', 'Selenium', 'Firebase', 'Docker', 'MongoDB'],
            points: [
                  'Design and development of a training and job recommendation algorithm',
                  'Data extraction with Beautiful Soup, Scrapy, and Selenium',
                  'API integration',
                  'Backend development with Flask'
            ],
            link: '',
            image: toggettech
      },
      {
            companyName: 'University of Yaoundé I',
            position: 'Full Stack Developer',
            startDate: 'July 2021',
            endDate: 'October 2021',
            description: 'Creation of frontend templates and API development with Laravel, collaboration with a team of developers to ensure compatibility and integration of templates.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'ReactJS', 'Node.js', 'Git', 'TailwindCSS'],
            points: [
                  'Creation of frontend templates',
                  'API development with Laravel',
                  'Collaboration with a team of developers to ensure compatibility and integration of templates'
            ],
            link: 'http://te-sea.cm/',
            image: uy1
      }
];

const Experience: React.FC = () => {
      return (
            <section id='experience' className="mt-32 container mx-auto">
                  <div className='opacity-100 text-center transform-none'>
                        <div className="mb-16">
                              <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Work Experience</h2>
                        </div>
                  </div>
                  <div className='opacity-100 transform-none'>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
                              {experienceData.map((item, index) => (
                                    <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200">
                                          <button className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                                                <img src={item.image} alt={`${item.companyName} logo`} width="50" height="50" decoding="async" data-nimg="1" className="object-cover text-transparent duration-300" />
                                          </button>
                                          <div className="flex flex-col items-start">
                                                <h3 className="text-xl font-semibold">{item.companyName}</h3>
                                                <p>{item.position}</p>
                                                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{item.startDate} - <span className="dark:text-primary-color text-tertiary-color">{item.endDate}</span></time>
                                                {item.link && <a href={item.link} className="text-blue-500 underline mt-2">See more</a>}
                                                <div >
                                                      <h4 className="font-semibold py-2">Description:</h4>
                                                      <p className="ml-4 tracking-tight dark:text-zinc-400 text-zinc-600 ">{item.description}</p>
                                                </div>

                                                <div>
                                                      <h4 className="font-semibold py-2">Missions:</h4>
                                                      <ul className="list-disc ml-6">
                                                            {item.points.map((point, pointIndex) => (
                                                                  <li key={pointIndex}>{point}</li>
                                                            ))}
                                                      </ul>
                                                </div>
                                                <div className='flex flex-col gap-y-2'>
                                                      <h4 className="font-semibold py-2">Technologies:</h4>
                                                      <div className="flex flex-wrap gap-x-2 gap-y-1 ml-4">
                                                            {item.technologies.map((tech, techIndex) => (
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

export default Experience;