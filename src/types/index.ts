import { ReactElement } from "react";

export const allowedCategories = ["WEB", "SERVER", "AI", "OTHER"] as const;
export type CategoryType = (typeof allowedCategories)[number];
  export interface ProjectProps {
    id:number;
    heading: string;
    src: string;
    link: string;
    description: string;
    images: string[];
    tech_used: string[];
    github_link?: string;
    category:string[];
  }

  export interface SkillsProps {
    id:number;
    name: string;
    category: CategoryType;
  }

export interface ContactProps {
    id: number;
    href: string;
    tag: string;
    icon: ReactElement;
  }
  
 export interface ImageDataProps {
    id: number;
    src: string;
    name: string;
  }
