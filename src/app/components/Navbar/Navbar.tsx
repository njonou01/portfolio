import React from "react";

type NavbarProps = {
  isScrolled: boolean;
  openMobileNav: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled, openMobileNav }) => {
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 z-40 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold gradient-text">
            GN.
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {["À propos", "Compétences", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 
                                       dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={openMobileNav}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
