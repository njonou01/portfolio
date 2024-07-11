import React from 'react';
import uy1 from '../assets/img/uy1.png';
import episen from '../assets/img/episen.png';

interface EducationItem {
      schoolName: string;
      position: string;
      startDate: string;
      endDate: string;
      courses: string[];
      img: any
}

const educationData: EducationItem[] = [
      {
            schoolName: "Public School of Health and Digital Engineering (EPISEN)",
            position: 'Créteil, France',
            startDate: 'September 2023',
            endDate: 'Present',
            courses: ['Statistics and Data Analysis', 'Information System', 'Database Systems' ,'Programming for Communication', 'Networks', 'Software Life Cycle'],
            img: episen
      },
      {
            schoolName: "Public School of Health and Digital Engineering (EPISEN)",
            position: 'Yaoundé, Cameroon',
            startDate: 'September 2019',
            endDate: 'July 2022',
            courses: ['Data Mining', 'Object Oriented Progamming', 'Algorithmic and complexity ', 'Optimisation', 'Machine Learning', 'Software Engineering'],
            img: uy1
      }
];

const Education: React.FC = () => {
      return (
            <section id='education' className="mt-32 container mx-auto">
                  <div className='opacity-100 text-center transform-none'>
                        <div className="mb-16">
                              <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight capitalize">Education</h2>
                        </div>
                  </div>
                  <div className='opacity-100 transform-none'>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
                              {educationData.map((item, index) => (
                                    <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200">
                                          <button className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                                                <img alt={`${item.schoolName} logo`} 
                                                width="50" height="50"  
                                                className="object-cover text-transparent duration-300"
                                                src={item.img}
                                                />
                                          </button>
                                          <div className="flex flex-col items-start">
                                                <h3 className="text-xl font-semibold">{item.schoolName}</h3>
                                                <p>{item.position}</p>
                                                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{item.startDate} - <span className="dark:text-primary-color text-tertiary-color">{item.endDate}</span></time>
                                                <div className="tracking-tight pl-8 dark:text-zinc-400 text-zinc-600 my-4">
                                                      <ul className="list-none mb-4">
                                                            {item.courses.map((course, index) => (
                                                                  <li key={index} className="flex items-center gap-4">
                                                                        <span><i className="fa-solid fa-arrow-right"></i></span>
                                                                        <span className="">{course}</span>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                      <p>
                                                            <a href='https://www.linkedin.com/in/njonou65' className="text-primary text-sm font-semibold">
                                                                  syllabus
                                                            </a>
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Education;
