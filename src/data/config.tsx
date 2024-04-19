import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ReactElement } from "react";

interface ProjectProps {
  id: number;
  heading: string;
  src: string;
  link: string;
  description: string;
  images: string[];
  stacks: string[];
}

interface ContactProps {
  id: number;
  href: string;
  tag: string;
  icon: ReactElement;
}

interface ImageDataProps {
  id: number;
  src: string;
  name: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    heading: "Livestream | Nucast",
    src: "/projects/livestream.png",
    link: "https://live.nucast.io/",
    description:
      "Build the future of Interactive Entertainment . It is a state of art livestreaming protocol that is set to change the content creation game with features that include Live Predictions with wins from a collective ADA pool. Vibrant chat rooms for engaging discussions. Simple micropayments to tip your favorite creators. A platform free from censorship",
    images: [
      "/projects/livestream.png",
      "/projects/livestream2.png",
      "/projects/livestream3.png",
    ],
    stacks: [
      "NextJs",
      "Typescript",
      "Supabase",
      "MeshJs",
      "ExpressJs",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    heading: "Tourice : A Tours & Travels Management",
    src: "/projects/tourice.png",
    link: "https://tourice.netlify.app/",
    description:
      "Embark on unforgettable journeys with Tourice, your ultimate companion in travel adventures. From exotic getaways to cultural expeditions, Tourice provides a seamless platform for managing all aspects of your travel experience. Discover breathtaking destinations, book accommodations, plan excursions, and create lifelong memories with ease.",
    images: [
      "/projects/tourice.png",
      "/projects/tourice2.png",
      "/projects/tourice3.png",
    ],
    stacks: ["ReactJs", "Vite", "MongoDB", "ExpressJs", "Tailwind CSS"],
  },

  {
    id: 3,
    heading: "Prognosis Finance : UI Page",
    src: "/projects/prognosis.png",
    link: "https://prognosis-finance.vercel.app/",
    description:
      "Deposit ADA into Predictify Stakepool and redeem in-game tokens for betting without worrying about losing your principal amount",
    images: [
      "/projects/prognosis.png",
      "/projects/prognosis2.png",
      "/projects/prognosis3.png",
      "/projects/prognosis4.png",
    ],
    stacks: ["NextJs", "Typescript", "Tailwind CSS", "Lenis-Scroll"],
  },
  {
    id: 4,
    heading: "DoorDash: Food Delivery Landing Page",
    src: "/projects/doordash.png",
    link: "https://door-dash-food.netlify.app/",
    description:
      "Order your favourite food anytime and we will deliver them right to where you are.We are company dedicated to the distribution of products by deilvery to your home or place the place where you are , with the best qualtiy of delivery.",
    images: [
      "/projects/doordash.png",
      "/projects/doordash2.png",
      "/projects/doordash3.png",
    ],
    stacks: ["ReactJs", "Tailwind CSS", "HTML5"],
  },
  {
    id: 5,
    heading: "Todo App : Manage Your Tasks",
    src: "/projects/todo.png",
    link: "https://personal-todos.netlify.app/",
    description:
      "A simple and intuitive task management application designed to help you organize and prioritize your daily tasks efficiently.",
    images: ["/projects/todo.png", "/projects/todo2.png"],
    stacks: ["React Js", "Local Storage", "Tailwind CSS", "Themes", "CRUD"],
  },
  {
    id: 6,
    heading: "OnSight Cafe : A Lovable Food",
    src: "/projects/cafe.png",
    link: "https://github.com/shubhu2002/OnSight-Cafe",
    description:
      "OnSight Cafe is a charming food application designed for delightful culinary experiences. Explore a diverse menu and enjoy the convenience of ordering from the comfort of your home or on the go.",
    images: ["/ projects/cafe.png"],
    stacks: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 7,
    heading: "Library Management",
    src: "/projects/library.png",
    link: "https://github.com/shubhu2002/Library_Management",
    description:
      "The Library Management application in C++ efficiently organizes library resources, enabling tasks such as book borrowing, return management, and cataloging. It incorporates features for user authentication, book search, and inventory management, enhancing library operations and user experience.",
    images: ["/projects/library.png"],
    stacks: ["C++", "windows.h", "password"],
  },
];

export const contacts: ContactProps[] = [
  {
    id: 1,
    href: "https://github.com/shubhu2002",
    tag: "Github",
    icon: <BsGithub size={24} />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/shubhanshu-saxena-902511230/",
    tag: "Linkedin",
    icon: <BsLinkedin size={24} />,
  },
  {
    id: 3,
    href: "https://twitter.com/Shubhanshu1453",
    tag: "Twitter",
    icon: <BsTwitterX size={24} />,
  },
  {
    id: 4,
    href: "https://www.instagram.com/hey.subhuu/",
    tag: "Instagram",
    icon: <FaInstagram size={24} />,
  },
  {
    id: 5,
    href: "https://wa.me/9074105188",
    tag: "Whatsapp",
    icon: <FaWhatsapp size={24} />,
  },
];

export const imgData: ImageDataProps[] = [
  {
    id: 1,
    src: "/skills/next.webp",
    name: "Next JS",
  },
  {
    id: 2,
    src: "/skills/ts.webp",
    name: "Typescript",
  },
  {
    id: 3,
    src: "/skills/tailwind.webp",
    name: "Tailwind CSS",
  },

  {
    id: 4,
    src: "/skills/react.webp",
    name: "React JS",
  },
  {
    id: 5,
    src: "/skills/express.png",
    name: "Express JS",
  },
  {
    id: 6,
    src: "/skills/node.webp",
    name: "Node JS",
  },

  {
    id: 7,
    src: "/skills/git.png",
    name: "Git",
  },
  {
    id: 8,
    src: "/skills/js.png",
    name: "JavaScript",
  },
  {
    id: 9,
    src: "/skills/motion.png",
    name: "Framer Motion",
  },
  {
    id: 10,
    src: "/skills/mongo.webp",
    name: "Mongo DB",
  },
  {
    id: 11,
    src: "/skills/mysql.png",
    name: "mySQL",
  },
  {
    id: 12,
    src: "/skills/bootstrap.webp",
    name: "Bootstrap",
  },
  {
    id: 13,
    src: "/skills/supabase.jpg",
    name: "Supabase",
  },
  {
    id: 14,
    src: "/skills/sass.png",
    name: "SASS",
  },
  {
    id: 15,
    src: "/skills/vercel.png",
    name: "Vercel",
  },
  {
    id: 16,
    src: "/skills/cpp.png",
    name: "C++",
  },
  {
    id: 17,
    src: "/skills/vscode.webp",
    name: "VS Code",
  },
];
