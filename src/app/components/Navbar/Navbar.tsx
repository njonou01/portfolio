import React, { useState } from "react";

interface NavbarProps {
  isScrolled: boolean;
  openMobileNav: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  languages: Language[];
}

interface Language {
  code: "fr" | "en";
  label: string;
  flag: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  openMobileNav,
  isDark,
  toggleTheme,
  languages,
}) => {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-transparent bg-clip-text"
          >
            GN.
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {["À propos", "Compétences", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={currentLang.flag}
                    alt={currentLang.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {currentLang.code.toUpperCase()}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl py-2 z-50 border border-gray-100 dark:border-gray-700">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={lang.flag}
                          alt={lang.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {lang.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          <button className="md:hidden" onClick={openMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {isLangOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLangOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
