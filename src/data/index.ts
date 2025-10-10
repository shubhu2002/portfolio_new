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
  SECTION_DATA
};



const SECTION_DATA = {
  Engineering_Philosophy: {
    id: "Engineering_Philosophy",
    title: "Engineering Philosophy",
    description:
      "Every project adds a new layer to my craft. From building robust systems to optimizing code for performance, my experience reflects a mindset of continuous growth and precision.",
    cardsData: [
      {
        id: 1,
        card_title: "Projects Worked",
        card_description:
          "Built and contributed to multiple real-world applications — focusing on clean architecture, usability, and scalable design.",
        card_img: "/projects.png",
      },
      {
        id: 2,
        card_title: "Working Experience",
        card_description:
          "1+ year of hands-on development experience delivering production-ready, high-performance software.",
        card_img: "/experience.png",
      },
      {
        id: 3,
        card_title: "Optimization Level",
        card_description:
          "I write every byte clean, efficient, and modular code — balancing performance, readability, and scalability.",
        card_img: "/optimization.png",
      },
    ],
  },

  Approach: {
    id: "Approach",
    title: "The Thinking Behind My Work",
    description:
      "From idea to deployment, I approach development as a craft — blending logic, design, and empathy to create software that feels natural and purposeful.",
    cardsData: [
      {
        id: 1,
        card_title: "Planning & Strategy",
        card_description:
          "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
        card_img: "/demand.png",
      },
      {
        id: 2,
        card_title: "Development & Progress Update",
        card_description:
          "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
        card_img: "/code.png",
      },
      {
        id: 3,
        card_title: "Testing & Launch",
        card_description:
          "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
        card_img: "/testing.png",
      },
    ],
  },
};