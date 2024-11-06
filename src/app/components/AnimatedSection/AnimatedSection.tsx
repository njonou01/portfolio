import React, { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  className?: string;
  children: React.ReactNode;
};
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  className,
  children,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
