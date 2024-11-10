import React, { useEffect, useState } from "react";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";
import Navbar from "../../components/Navbar/Navbar";
import MobileNav from "../../components/MobileNav/MobileNav";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import profilePath from "../../../assets/images/CFA_AFIA_Bootcamp_DSF5856__1_-removebg-preview.png";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
const Home: React.FC = () => {
  interface Language {
    code: "fr" | "en";
    label: string;
    flag: string;
  }
  const languages: Language[] = [
    {
      code: "fr",
      label: "Français",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.6.6/flags/4x3/fr.svg",
    },
    {
      code: "en",
      label: "English",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.6.6/flags/4x3/gb.svg",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);
  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar
        languages={languages}
        isScrolled={isScrolled}
        openMobileNav={() => setIsMobileNavOpen(true)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />

      <HeroSection
        roles={["Data Scientist", "ML Engineer", "Full Stack Developer"]}
        imgRatio={1.3}
        profilePath={profilePath}
      />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />

      <MobileNav
        languages={languages}
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
        isDark={false}
        toggleTheme={toggleTheme}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      <Footer />
    </div>
  );
};

export default Home;
