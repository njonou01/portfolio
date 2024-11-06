import React, { useEffect, useState } from "react";

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full 
               shadow-lg hover:bg-primary-700 transition-all duration-300 z-40
               ${
                 isVisible
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-10"
               }`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTopButton;
