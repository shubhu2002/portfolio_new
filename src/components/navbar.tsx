import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "works", label: "Works" },
  { to: "skills", label: "Skills" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[9999] flex items-center justify-between px-6 py-5 md:px-12">
        {pathname === "/projects" ? (
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 font-helvetica-light text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
          >
            <span>&larr;</span>
            <span>Home</span>
          </Link>
        ) : (
          <ScrollLink
            to="hero"
            href="/"
            smooth={true}
            duration={500}
            className="flex cursor-pointer items-center gap-2 font-helvetica-light text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
          >
            <span>&larr;</span>
            <span>Home</span>
          </ScrollLink>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[9998] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-500 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-20}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer font-thunder-bold text-5xl uppercase tracking-wider text-white transition-colors duration-300 hover:text-accent-purple md:text-7xl"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
