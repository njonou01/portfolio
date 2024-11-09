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
const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar
        isScrolled={isScrolled}
        openMobileNav={() => setIsMobileNavOpen(true)}
      />
      <HeroSection
        roles={["Data Scientist", "ML Engineer", "Full Stack Developer"]}
        imgRatio={1.3}
        profilePath={profilePath}
      />
      <EducationSection />
      <ExperienceSection />

      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      <Footer />
    </>
  );
};

export default Home;
