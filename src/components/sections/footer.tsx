import { FiArrowUpRight } from "react-icons/fi";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhanshu-saxena-902511230/" },
  { label: "Github", href: "https://github.com/shubhu2002" },
  { label: "Twitter", href: "https://twitter.com/Shubhanshu1453" },
  { label: "Instagram", href: "https://www.instagram.com/hey.subhuu/" },
];

const Footer = () => {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-primary px-4 py-6 md:px-16 lg:px-24">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <span className="font-helvetica-light text-xs uppercase tracking-[0.2em] text-muted">
          &copy; Shubhanshu Saxena
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 font-helvetica-light text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="cursor-pointer rounded-full border border-white/20 p-2 transition-colors duration-300 hover:border-white/50"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
