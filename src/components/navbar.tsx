import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import useIsMobile from "~/hooks/useIsMobile";

const Navbar: React.FC = () => {
  return (
    <div className="fixed left-0 right-0 top-3 z-[9999] w-full p-1 px-4 md:px-8 ">
      <div className="flex h-full items-center justify-center justify-self-center rounded-xl p-5 py-3.5 font-helvetica-light uppercase tracking-widest  text-tertiary backdrop-blur-lg md:px-6">
        <div className="flex items-center gap-2.5 text-sm sm:gap-2 md:gap-8 md:text-base">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Links = () => {
  const isMobile = useIsMobile();
  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <ScrollLink
        activeClass="hero"
        activeStyle={{ color: "#51baff" }}
        to="hero"
        spy={true}
        smooth={true}
        offset={-225}
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-blue"
      >
        Home
      </ScrollLink>
      <ScrollLink
        activeClass="about"
        activeStyle={{ color: "#51baff" }}
        to="about"
        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-blue"
      >
        About
      </ScrollLink>

      <ScrollLink
        activeClass="works"
        activeStyle={{ color: "#51baff" }}
        to="works"
        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-blue"
      >
        Works
      </ScrollLink>
      <ScrollLink
        activeClass="skills"
        activeStyle={{ color: "#51baff" }}
        to="skills"
        spy={!isAtBottom}
        smooth={true}
        offset={-75}
        spyThrottle={700}
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-blue"
      >
        Skills
      </ScrollLink>
      <ScrollLink
        activeClass="connect"
        activeStyle={{ color: "#51baff" }}
        to="connect"
        spy={true}
        smooth={true}
        offset={isMobile ? -520 : -280}
        duration={500}
        className="cursor-pointer transition-colors duration-300 hover:text-blue"
      >
        Connect
      </ScrollLink>
    </>
  );
};
