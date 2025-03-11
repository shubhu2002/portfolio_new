import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactProps } from "~/types";

export const CONTACTS: ContactProps[] = [
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
