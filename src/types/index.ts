import { ReactElement } from "react";

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
