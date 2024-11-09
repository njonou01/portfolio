import React from "react";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gray-900/95 backdrop-blur-lg transform transition-transform duration-300 z-50 
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)} className="dark:text-white">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-8">
          {["À propos", "Compétences", "Projets", "Expérience", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-800 dark:text-white hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
