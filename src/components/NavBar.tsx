import React from 'react'
// import Dropdown from './Dropdown'

const NavBar: React.FC = () => {
      // const languageItems = [
      //       {
      //             id: 1,
      //             value: 'English',
      //             img: 'https://flagcdn.com/w20/us.png',
      //       },
      //       {
      //             id: 2,
      //             value: 'Français',
      //             img: 'https://flagcdn.com/w20/fr.png',
      //       },
      //       {
      //             id: 3,
      //             value: 'Español',
      //             img: 'https://flagcdn.com/w20/es.png',
      //       },
      // ]
      return (
            <nav className="container mx-auto  flex justify-between items-center h-[5rem]">
                  <button className="text-2xl font-bold text-white">Gaby NJONOU</button>
                  <div className="hidden md:flex space-x-6  justify-between items-center">
                        <a href="#home" className="block px-4 text-sm ">Home</a>
                        <a href="#about" className="block px-4 text-sm ">About</a>
                        <a href="#skills" className="block px-4 text-sm ">Skills</a>
                        <a href="#experience" className="block px-4 text-sm ">Experience</a>
                        <a href="#projects" className="block px-4 text-sm ">Projects</a>
                        <a href="#contact" className="block px-4 text-sm ">Contact</a>
                        {/* <Dropdown items={languageItems} /> */}
                  </div>
            </nav>
      )
}

export default NavBar