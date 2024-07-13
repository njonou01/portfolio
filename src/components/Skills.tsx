import React from 'react';
import { skillsData } from '../data/SkillsData';
import LayoutSection from './LayoutSection';



const Skills: React.FC = () => {
      return (
            <LayoutSection title="Skills" id="skills">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                              <div className="p-6 rounded-lg bg-blue-50 shadow text-center" key={index}>
                                    <i className={`${skill.icon} text-4xl mb-4 bg-clip-text text-transparent bg-gradient-bg`}></i>
                                    <h3 className="font-semibold mb-2">{skill.title}</h3>
                                    <p className="text-gray-600">{skill.description}</p>
                              </div>
                        ))}
                  </div>
            </LayoutSection>
      );
}

export default Skills;
