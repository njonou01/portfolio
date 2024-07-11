import React from 'react';
import profile from "../assets/img/CFA_AFIA_Bootcamp_DSF5856-removebg-preview.png";
import blob from "../assets/img/blob (1).png";
import { FaFacebook, FaGithub, FaGitlab, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
    { url: "http://", icon: <FaFacebook />, title: "Facebook" },
    { url: "http://", icon: <FaLinkedinIn />, title: "LinkedIn" },
    { url: "http://", icon: <FaGithub />, title: "GitHub" },
    { url: "https://", icon: <FaGitlab />, title: "GitLab" }
];

const profileImage = profile;
const blobImage = blob;

const aboutMeText = {
    heading: "Hey 👋 I am Gaby",
    description: [
        "A tech-enthusiastic engineering apprentice with a Bachelor's degree in Computer Science, enhancing my analytical, problem-solving, and optimization skills.",
        "Pursuing an engineering degree at EPISEN, I blend academics with practice.",
        "Proficient in HTML, CSS, Tailwind CSS, JavaScript, Python, React, Angular, Spring, and with expertise in algorithmic thinking, AI, data science, and image processing.",
        "I've also used Git/GitHub for version control and tools like Beautiful Soup, Scrapy, and Selenium for web scraping.",
        "Adaptable and collaborative, I aim to contribute to cutting-edge tech projects."
    ],
    highlightedText: "cutting-edge tech projects"
};

const AboutMe = () => {
    return (
        <section className="pt-10 overflow-hidden dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className='container text-center mx-auto opacity-100 transform-none'>
                <div className="mb-16">
                    <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">About Me</h2>
                </div>
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="relative overflow-hidden">
                        <img className="absolute bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={blobImage} alt="" />
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={profileImage} alt="" />
                    </div>
                    <div className='flex text-right hyphens-auto flex-col justify-self-end justify-end items-end'>
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            {aboutMeText.heading}
                        </h2>
                        <div className="max-w-lg mt-3 justify-end items-end justify-self-end text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                            {aboutMeText.description.map((paragraph, index) => (
                                <span key={index}>{paragraph}</span>
                            ))}
                        </div>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                            </span>
                            <div className="my-12 flex text-3xl items-center gap-5">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} title={link.title}>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
