import React from 'react';

interface Skill {
      icon: string;
      title: string;
      description: string;
}

const skillsData: Skill[] = [
      {
            icon: 'fas fa-code',
            title: 'Frontend',
            description: 'HTML, CSS, JavaScript, React',
      },
      {
            icon: 'fas fa-server',
            title: 'Backend',
            description: 'Node.js, Express, Python, Django',
      },
      {
            icon: 'fas fa-database',
            title: 'Databases',
            description: 'MySQL, MongoDB, PostgreSQL',
      },
      {
            icon: 'fas fa-tools',
            title: 'Tools',
            description: 'Git, Docker, Jenkins, AWS',
      },
      {
            icon: 'fas fa-chart-line',
            title: 'Data Science',
            description: 'Python, R, TensorFlow, Pandas',
      },
      {
            icon: 'fas fa-chart-pie',
            title: 'Data Analyst',
            description: 'SQL, Excel, Tableau, PowerBI',
      },
      {
            icon: 'fas fa-cogs',
            title: 'Algorithmic Thinking',
            description: 'Dynamic Programming, Greedy Algorithms, Divide and Conquer',
      },
      {
            icon: 'fas fa-cloud',
            title: 'DevOps',
            description: 'Kubernetes, Terraform, Ansible, CI/CD',
      },
];



const Skills: React.FC = () => {
      return (
            <section className="py-20">
                  <div className="container mx-auto px-6">
                        <div className='opacity-100 text-center transform-none container mx-auto'>
                              <div className="mb-16">
                                    <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Skills</h2>
                              </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {skillsData.map((skill, index) => (
                                    <div className="p-6 rounded-lg bg-blue-50 shadow text-center" key={index}>
                                          <i className={`${skill.icon} text-4xl mb-4 bg-clip-text text-transparent bg-gradient-bg`}></i>
                                          <h3 className="font-semibold mb-2">{skill.title}</h3>
                                          <p className="text-gray-600">{skill.description}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default Skills;
