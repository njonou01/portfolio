import { ReactNode, useState } from "react";

const ThemeLanguage = () => {
      const [language, setLanguage] = useState<string>('en');
      const frenchFlag:ReactNode = <img className="w-6 h-6 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Franceroundflag.svg" alt="France" />
      const englishFlag:ReactNode = <img className="w-6 h-6 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg" alt="France" />
      const toogleLanguage = () => {
            if (language === 'en') {
                  
                  alert('French  language is not supported yet')
            }
      }
      return (
            <button onClick={toogleLanguage}>
                  <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform  flex items-center justify-center">
                              {language === 'en' ? englishFlag : frenchFlag}
                        </div>
                  </div>
            </button>
      )
}

export default ThemeLanguage