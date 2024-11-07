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
