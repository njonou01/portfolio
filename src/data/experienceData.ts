import uy1 from '../assets/img/uy1.png';
import studentBank from '../assets/img/studentbank.png';
import toggettech from '../assets/img/togettech.jpeg';
import ExperienceItem from '../types/experience';
export const experienceData: ExperienceItem[] = [
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