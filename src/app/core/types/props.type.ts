export type HeroProps = {
  imgRatio: number;
  roles: string[];
  profilePath: string;
};

export type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export type WordSegment = {
  text: string;
  isHashtag: boolean;
};
export type NavbarProps = {
  isScrolled: boolean;
  openMobileNav: () => void;
};

export type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

export type Education = {
  title: string;
  school: string;
  period: string;
  location: string;
  specialization: string[];
  icon: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
  icon: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};
