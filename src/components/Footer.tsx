import React from 'react';

import { FaLinkedin, FaGithub, FaTwitter, FaGitlab } from 'react-icons/fa';

const footerData = {
  aboutMe: "Apprentice Engineer specializing in web , mobile applications and data science.",
  services: ["Web Development", "App Development", "DataScience", "Desktop  Development" , ],
  contact: {
    email: "njonougaby45@gmail.com",
    phone: "+33 7 80836706",
  },
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/njonou65",
      title: "LinkedIn",
      icon: <FaLinkedin className="w-8 h-8" />,
    },
    {
      href: "https://github.com/njonou01",
      title: "GitHub",
      icon: <FaGithub className="w-8 h-8" />,
    },
    {
      href: "https://twitter.com/yourprofile", 
      icon: <FaTwitter className="w-8 h-8" />,
    },
    {
      href: "https://gitlab.com/yourprofile", 
      title: "GitLab",
      icon: <FaGitlab className="w-8 h-8" />,
    },
  ],
};



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">About Me</h4>
                        <p className="text-gray-400">{footerData.aboutMe}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="text-gray-400">
                            {footerData.services.map((service, index) => (
                                <li key={index} className="mb-2">{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-gray-400 mb-2">Email: {footerData.contact.email}</p>
                        <p className="text-gray-400">Phone: {footerData.contact.phone}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            {footerData.socialLinks.map((link, index) => (
                                <a key={index} title={link.title} href={link.href} className="text-gray-400 hover:text-white">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; 2024 GABY NJONOU. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
