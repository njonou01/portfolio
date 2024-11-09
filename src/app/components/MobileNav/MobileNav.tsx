interface Language {
  code: "fr" | "en";
  label: string;
  flag: string;
}

interface MobileNavProps {
  languages: Language[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDark: boolean;
  toggleTheme: () => void;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  languages,
  isOpen,
  setIsOpen,
  isDark,
  toggleTheme,
  currentLang,
  setCurrentLang,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transform transition-all duration-500 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container h-full mx-auto px-6 py-8 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-transparent bg-clip-text"
          >
            GN.
          </a>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    currentLang.code === lang.code
                      ? "bg-primary-500"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={lang.flag}
                      alt={lang.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow">
          {["À propos", "Compétences", "Projets", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 py-4 transition-colors"
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
