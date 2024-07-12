import React from 'react';
import NavBar from './NavBar';
import ProgressiveText from './ProgressiveText';
import { FaDownload, FaFacebook, FaGithub, FaGitlab, FaLinkedinIn } from 'react-icons/fa';

import profileImage from '../assets/img/LSG_7719-US_DV-2023_Loterie-600x600_px-removebg-preview.png';

const profile = {
    name: "NJONOU ",
    firstName: "GABY",
    role: "Apprentice IT Engineer",
    description: "A passionate developer eager for challenges, I'm determined to apply my skills and learn within your team, ready to take on all challenges to contribute to innovative projects."
};

const socialLinks = [
    { url: "http://", icon: <FaFacebook />, title: "Facebook" },
    { url: "http://", icon: <FaLinkedinIn />, title: "LinkedIn" },
    { url: "http://", icon: <FaGithub />, title: "GitHub" },
    { url: "https://", icon: <FaGitlab />, title: "GitLab" }
];

const Hero: React.FC = () => {
    return (
        <header id="home" className="bg-gradient-bg px-2 font-bold text-white">
            <NavBar />
            <section className="pt-20 h-min-[calc(100vh-5rem)] flex  items-center">
                <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <div className="container mx-auto flex flex-col justify-center items-center text-center px-6 py-16 text-white">
                            <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I'm {profile.firstName} {profile.name}</h1>
                            <div className="flex flex-col justify-center gap-2 md:flex-row items-center">
                                
                                <h2 className="text-3xl md:text-5xl font-bold ">An </h2>
                                <h2 className="text-2xl h-5 md:h-full md:text-5xl font-bold">
                                    <ProgressiveText text={profile.role} interval={200} />
                                </h2>
                            </div>
                            <p className="text-xl my-6 max-w-2xl text-justify">{profile.description}</p>
                            <div className="my-12 flex text-3xl items-center gap-5">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} title={link.title}>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                            <div className="my-4 flex items-center gap-2">
                                <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                    Contact me
                                </a>
                                <a download={'cv.pdf'} href="/assets/doc/cv.pdf" className="flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                    <span>
                                        Resume
                                    </span>
                                    <FaDownload />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:w-1/3 relative md:flex flex-col md:flex-row justify-end">
                        <img src={profileImage} alt="GABY NJONOU" className="relative z-10 rounded-full" />
                    </div>
                </section>
            </section>
        </header>



    );
};

export default Hero;
