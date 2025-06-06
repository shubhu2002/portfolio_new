import { SKILLS, SKILLSIMAGEPROPS } from "./skills";
import { CONTACTS } from "./contacts";
import { PROJECTS } from "./projects";

const FILTERS = [
  { select: "all", label: "All", id: 1 },
  { select: "nucast", label: "Nucast Pte.Ltd.", id: 2 },
  { select: "personal", label: "Personal", id: 3 },
];

const TAGS = [
  "Build",
  "Develop",
  "Code",
  "Deploy",
  "Debug",
  "Optimize",
  "Bundle",
  "Security",
  "IDE",
  "Update",
  "Server",
];

const ANIMATION_CONFIG = {
  variants: {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
  whileInView: "visible",
  initial: "hidden",
  viewport: {
    once: true,
  },
};

export {
  SKILLS,
  SKILLSIMAGEPROPS,
  CONTACTS,
  PROJECTS,
  FILTERS,
  TAGS,
  ANIMATION_CONFIG,
};
