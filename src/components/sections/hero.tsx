import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <Element name="hero" id="hero">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary">
        {/* Animated gradient orbs */}
        <div className="hero-orb-1 absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-accent-purple/30 blur-[120px]" />
        <div className="hero-orb-2 absolute bottom-[10%] right-[25%] h-[400px] w-[400px] rounded-full bg-accent-red/25 blur-[100px]" />
        <div className="hero-orb-3 absolute right-[5%] top-[50%] h-[300px] w-[300px] rounded-full bg-accent-purple/20 blur-[80px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-50" />

        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        {/* Doodle: circle ring top-right */}
        <svg className="hero-spin absolute right-[8%] top-[8%] z-10 opacity-10 md:right-[15%] md:top-[12%] md:opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="40" cy="40" r="20" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Doodle: cross/plus */}
        <svg className="hero-float absolute right-[50%] top-[10%] z-10 opacity-10 md:right-[35%] md:top-[18%] md:opacity-15" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="white" strokeWidth="1" />
          <line x1="0" y1="12" x2="24" y2="12" stroke="white" strokeWidth="1" />
        </svg>

        {/* Doodle: small dots cluster */}
        <svg className="hero-float-delay absolute bottom-[30%] right-[5%] z-10 opacity-10 md:bottom-[25%] md:right-[8%] md:opacity-20" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="30" cy="10" r="2" fill="white" />
          <circle cx="50" cy="10" r="2" fill="white" />
          <circle cx="10" cy="30" r="2" fill="white" />
          <circle cx="30" cy="30" r="2" fill="white" />
          <circle cx="50" cy="30" r="2" fill="white" />
          <circle cx="10" cy="50" r="2" fill="white" />
          <circle cx="30" cy="50" r="2" fill="white" />
          <circle cx="50" cy="50" r="2" fill="white" />
        </svg>

        {/* Doodle: wavy line */}
        <svg className="hero-float absolute bottom-[35%] left-[5%] z-10 hidden opacity-10 md:block" width="120" height="30" viewBox="0 0 120 30" fill="none">
          <path d="M0 15 Q15 0, 30 15 Q45 30, 60 15 Q75 0, 90 15 Q105 30, 120 15" stroke="white" strokeWidth="1" fill="none" />
        </svg>

        {/* Doodle: diamond shape */}
        <svg className="hero-spin-slow absolute bottom-[18%] left-[8%] z-10 opacity-10 md:bottom-[15%] md:left-[12%] md:opacity-15" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="15" y="0" width="21" height="21" rx="2" transform="rotate(45 15 0)" stroke="white" strokeWidth="1" />
        </svg>

        {/* Doodle: arrow scribble top-left area */}
        <svg className="hero-float-delay absolute left-[30%] top-[20%] z-10 hidden opacity-10 md:block" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M5 45 L45 5" stroke="white" strokeWidth="1" />
          <path d="M30 5 L45 5 L45 20" stroke="white" strokeWidth="1" fill="none" />
        </svg>

        {/* Doodle: small star */}
        <svg className="hero-pulse absolute bottom-[25%] right-[40%] z-10 opacity-10 md:bottom-[20%] md:right-[45%] md:opacity-15" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="white" />
        </svg>

        {/* Doodle: curved bracket */}
        <svg className="hero-float absolute right-[20%] bottom-[40%] z-10 hidden opacity-10 md:block" width="20" height="60" viewBox="0 0 20 60" fill="none">
          <path d="M15 0 Q0 15, 0 30 Q0 45, 15 60" stroke="white" strokeWidth="1" fill="none" />
        </svg>

        {/* Left vertical text */}
        <div className="absolute bottom-0 left-4 top-0 z-10 flex items-center md:left-6">
          <span className="vertical-text font-helvetica-light text-[9px] uppercase tracking-[0.3em] text-muted/60 md:text-xs md:text-muted">
            Software Engineer
          </span>
        </div>

        {/* Right vertical line + year */}
        <div className="absolute bottom-0 right-4 top-0 z-10 flex flex-col items-center justify-center gap-3 md:right-6 md:gap-4">
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:h-16 md:via-white/30" />
          <span className="font-helvetica-light text-[8px] uppercase tracking-[0.3em] text-muted/60 md:text-[10px] md:text-muted">
            {new Date().getFullYear()}
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:h-16 md:via-white/30" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex w-full flex-col px-4 md:px-16 lg:px-24">
          {/* Status badge */}
          <div className="hero-fade-in mb-8 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="font-helvetica-light text-[11px] uppercase tracking-[0.25em] text-white/60">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title font-thunder-extrabold text-5xl uppercase leading-[0.92] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl">
            I Build
            <br />
            <span className="hero-title-accent bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Experiences
            <br />
            <span className="text-white/40">That Push</span>
            <br />
            The Boundaries
          </h1>

          {/* Subtitle row */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="hero-fade-in max-w-sm font-helvetica-light text-sm leading-relaxed text-white/40" style={{ animationDelay: "0.5s" }}>
              Crafting high-performance web applications,
              <br className="hidden sm:block" />
              AI-powered products & blockchain protocols
            </p>

            {/* Scroll indicator */}
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-20}
              className="hero-fade-in group flex cursor-pointer items-center gap-3"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="font-helvetica-light text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors group-hover:text-white/70">
                Scroll to explore
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/5">
                <FiArrowDown className="hero-bounce text-sm text-white/50 group-hover:text-white" />
              </span>
            </ScrollLink>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </Element>
  );
};

export default Hero;
