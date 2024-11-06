import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gaby NJONOU KOUAYA
              </h3>
              <p className="text-gray-400 mb-6">
                Data Scientist et ML Engineer passionné par l'innovation et la
                résolution de problèmes complexes.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {[
                  "À propos",
                  "Compétences",
                  "Projets",
                  "Expérience",
                  "Contact",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:njonougaby45@gmail.com"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    njonougaby45@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33780808108"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    +33 7 80 80 81 08
                  </a>
                </li>
                <li className="text-gray-400">Ile de France, France</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Gaby NJONOU KOUAYA. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
