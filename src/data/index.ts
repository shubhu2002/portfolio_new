import { SKILLS, SKILLSIMAGEPROPS } from "./skills";
import { CONTACTS } from "./contacts";
import { PROJECTS } from "./projects";

const FILTERS = [
  { select: "all", label: "All", id: 1 },
  { select: "nucast", label: "Nucast Pte.Ltd.", id: 2 },
  { select: "personal", label: "Personal", id: 3 },
];

const animations: {
  variants: {
    visible: {
      x: number;
      opacity: number;
    };
    hidden: {
      x: number;
      opacity: number;
    };
  };
  whileInView: string;
  initial: string;
} = {
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  },
  whileInView: "visible",
  initial: "hidden",
};

export { SKILLS, SKILLSIMAGEPROPS, CONTACTS, PROJECTS , FILTERS, animations };
