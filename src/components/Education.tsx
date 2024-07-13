import React from 'react';
import { educationData } from '../data/educationData';
import LayoutSection from './LayoutSection';


const handleDownload = (href: string, name: string) => {
      const link = document.createElement('a');
      link.href = href;
      console.log(href)
      link.target = '_blank';
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
};

const Education: React.FC = () => {
      return (
            <LayoutSection title="Education" id="education">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 ">
                        {educationData.map((item, index) => (
                              <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)]  before:bg-zinc-200">
                                    <button className="grid place-items-center  bg-secondary-bg border  border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                                          <img alt={`${item.schoolName} logo`}
                                                width="50" height="50"
                                                className="object-cover text-transparent duration-300"
                                                src={item.img}
                                          />
                                    </button>
                                    <div className="flex flex-col items-start">
                                          <h3 className="text-xl font-semibold">{item.schoolName}</h3>
                                          <p>{item.position}</p>
                                          <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{item.startDate} - <span className=" text-tertiary-color">{item.endDate}</span></time>
                                          <div className="tracking-tight pl-8  text-zinc-600 my-4">
                                                <ul className="list-none mb-4">
                                                      {item.courses.map((course, index) => (
                                                            <li key={index} className="flex items-center gap-4">
                                                                  <span><i className="fa-solid fa-arrow-right"></i></span>
                                                                  <span className="">{course}</span>
                                                            </li>
                                                      ))}
                                                </ul>
                                                <p>
                                                      <button className="text-primary text-sm font-semibold" onClick={() => handleDownload(item.link, item.linkName)}>
                                                            syllabus
                                                      </button>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </LayoutSection>
      );
};

export default Education;
