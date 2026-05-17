export const allowedCategories = ["WEB", "SERVER", "AI", "OTHER"] as const;
export type CategoryType = (typeof allowedCategories)[number];

export interface ProjectProps {
  id: number;
  heading: string;
  image: string;
  src: string;
  link: string;
  link2?: string;
  description: string;
  tech_used: string[];
  github_link?: string;
  category: string[];
}

export interface SkillsProps {
  name: string;
  category: CategoryType;
}
