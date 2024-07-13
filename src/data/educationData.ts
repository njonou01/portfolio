import uy1 from '../assets/img/uy1.png';
import episen from '../assets/img/episen.png';
import EducationItem from '../types/education';
export const educationData: EducationItem[] = [
      {
            schoolName: "Public School of Health and Digital Engineering (EPISEN)",
            position: 'Créteil, France',
            startDate: 'September 2023',
            endDate: 'Present',
            courses: ['Statistics and Data Analysis', 'Information System', 'Database Systems', 'Programming for Communication', 'Networks', 'Software Life Cycle'],
            img: episen,
            link: '/assets/doc/sylabus_ing.pdf',
            linkName: 'sylabus_ing.pdf'
      },
      {
            schoolName: "Public School of Health and Digital Engineering (EPISEN)",
            position: 'Yaoundé, Cameroon',
            startDate: 'September 2019',
            endDate: 'July 2022',
            courses: ['Data Mining', 'Object Oriented Progamming', 'Algorithmic and complexity ', 'Optimisation', 'Machine Learning', 'Software Engineering'],
            img: uy1,
            link: '/assets/doc/syllabus_licence.pdf',
            linkName: 'syllabus_licence.pdf'
      }
];