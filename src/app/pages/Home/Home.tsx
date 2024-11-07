import React, { useState } from "react";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";
import Navbar from "../../components/Navbar/Navbar";
import MobileNav from "../../components/MobileNav/MobileNav";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import profilePath from "../../../assets/images/CFA_AFIA_Bootcamp_DSF5850__1_-removebg-preview.png";
const Home: React.FC = () => {
  const [isScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar
        isScrolled={isScrolled}
        openMobileNav={() => setIsMobileNavOpen(true)}
      />
      <HeroSection
        imgRatio={1.3}
        roles={["FUTUR INGÉNIEUR DATA"]}
        profilePath={profilePath}
      />
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      <Footer />
    </>
  );
};

export default Home;
