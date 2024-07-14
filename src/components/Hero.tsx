import React, { ReactNode } from 'react';
import ProgressiveText from './ProgressiveText';
import { FaCog, FaDownload, FaFacebook, FaGithub, FaGitlab, FaLinkedinIn, FaMapMarkerAlt, FaSchool, FaSyncAlt } from 'react-icons/fa';
import profileImage from '../assets/img/LSG_7719-US_DV-2023_Loterie-600x600_px-removebg-preview.png';
import school from '../assets/img/episen-nobg.png';
const profile = {
    name: "NJONOU ",
    firstName: "GABY",
    role: "Apprentice IT Engineer",
    description: "A passionate developer eager for challenges, I'm determined to apply my skills and learn within your team, ready to take on all challenges to contribute to innovative projects.",
    research: "I am looking for a 2-year work-study program to obtain my engineering diploma",
    rythme: ""
};

const socialLinks = [
    { url: "https://www.facebook.com/gabi.kuaya/", icon: <FaFacebook className='text-blue-600' />, title: "Facebook" },
    { url: "https://www.linkedin.com/in/njonou65", icon: <FaLinkedinIn className='text-blue-500' />, title: "LinkedIn" },
    { url: "https://github.com/njonou01", icon: <FaGithub className='text-gray-600' />, title: "GitHub" },
    { url: "https://gitlab.com/users/njonou65/projects", icon: <FaGitlab className='text-yellow-500' />, title: "GitLab" }
];

const cardSection = [
    {
        title: "Alternation rhythm",
        description: "1 week in business - 1 week at school",
        icon: <FaSyncAlt />,
    },
    {
        title: "I am interested in",
        description: "Application development Fullstack(Backend and Frontend), Data(Science , Engineer ,BI , ML), ",
        icon: <FaCog className='text-gradient' />,
    },
    {
        title: "Mobility Locations",
        description: "Ile-de-France, Lille , Metz , Reims , Niort ",
        icon: <FaMapMarkerAlt />,
    },
    {
        title: "School",
        description: "ENGINEERING PROGRAM IN Computer Science",
        icon: <FaSchool />,
        img: school
    }
];


const Cards: ReactNode = (
    <div className="container  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {cardSection.map((card, index) => (
            <div key={index} className=" shadow-xl p-4 ">
                <div className="flex text-primary py-2 justify-center items-center w-full text-5xl ">
                    {card.icon}
                </div>
                <div className="flex justify-center items-center w-full">
                    <h3 className="font-semibold text-xl text-gradient mb-2">{card.title}</h3>
                </div>
                <p className="text-sm font-normal text-gray-600">{card.description}</p>

                {card.img &&
                    <>
                        <div className="flex justify-center items-center w-full">
                            <img src={card.img} alt="GABY NJONOU" />
                        </div>

                    </>
                }
            </div>
        ))}
    </div>
)


const Hero: React.FC = () => {
    return (
        <>
            <header id="home" className=" px-2 font-bold text-gray-600">
                <section className=" min-h-[calc(100vh-5rem)] flex-col items-center">
                    <section className="container mx-auto   flex flex-col md:flex-row justify-center items-center">
                        <div className="flex w-full flex-col md:flex-row justify-between items-center">
                            <div className="mb-8 md:mb-0 md:w-1/2 w-full">
                                <div className="flex flex-col w-full justify-center md:justify-start md:items-start items-center   gap-1 pt-16 pb-4 ">
                                    <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I'm {profile.firstName} {profile.name}</h1>
                                    <div className="flex flex-col gap-2 pb-2 md:flex-row items-center">
                                        <h2 className="text-3xl md:text-5xl font-bold ">An </h2>
                                        <h2 className="text-2xl h-5 md:h-full md:text-5xl font-bold">
                                            <ProgressiveText text={profile.role} interval={200} />
                                        </h2>
                                    </div>
                                    <p className="text-xl font-normal  max-w-2xl text-justify">{profile.description}</p>
                                    <p className="text-xl font-normal  max-w-2xl text-justify">{profile.research}</p>
                                    
                                    <div className="my-5 flex text-3xl items-center gap-5">
                                        {socialLinks.map((link, index) => (
                                            <a key={index} href={link.url} title={link.title}>
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="my-4 flex items-center gap-2">
                                        <a href="#contact" className="bg-gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                            Contact me
                                        </a>
                                        <a download={'cv.pdf'} href="/assets/doc/cv.pdf" className="bg-gradient-bg flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                            <span>
                                                Resume
                                            </span>
                                            <FaDownload />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative flex  md:flex-row  justify-center items-center md:w-1/2 w-full">
                                <img src={profileImage} alt="GABY NJONOU" className="w-96 h-96 relative z-10 rounded-full" />
                            </div>
                        </div>
                    </section>
                    {Cards}

                </section>

            </header>
        </>
    );
};

export default Hero;