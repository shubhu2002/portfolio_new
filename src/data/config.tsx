import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactProps, ImageDataProps } from "~/types";

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
