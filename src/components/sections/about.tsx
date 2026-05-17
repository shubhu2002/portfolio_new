import Image from "next/image";
import { Element } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";

const metadata = [
  { label: "ROLE", value: "SOFTWARE ENGINEER" },
  { label: "EXPERIENCE", value: "2+ YEARS" },
  { label: "COMPANY", value: "NUCAST PTE. LTD.", href: "https://nucast.io", sub: "TRIVOLVE TECH", subHref: "https://trivolvetech.com" },
  { label: "LOCATION", value: "INDIA" },
  { label: "FOCUS", value: "WEB3 + AI + FULLSTACK" },
];

const About = () => {
  return (
    <Element name="about" id="about">
      <section className="relative bg-primary px-4 py-16 md:px-16 md:py-28 lg:px-24">
        <div className="mb-10 flex items-end justify-between md:mb-16">
          <h2 className="font-thunder-extrabold text-4xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl">
            About Me
          </h2>
          <a
            href="https://drive.google.com/file/d/1aob5c30w7epk3-gYsDg5n7nGYdhgdgU4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-helvetica-light text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white md:text-sm"
          >
            Resume
            <FiArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left: Metadata + Bio */}
          <div className="lg:col-span-5">
            <div className="mb-10 flex flex-col gap-5">
              {metadata.map((item) => (
                <div key={item.label} className="flex gap-6 border-b border-white/5 pb-4">
                  <span className="w-28 shrink-0 font-helvetica-light text-[11px] uppercase tracking-[0.25em] text-muted">
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 font-helvetica-regular text-sm uppercase tracking-widest text-white transition-colors hover:text-accent-purple"
                      >
                        {item.value}
                        <FiArrowUpRight className="text-xs opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="font-helvetica-regular text-sm uppercase tracking-widest text-white">
                        {item.value}
                      </span>
                    )}
                    {item.sub && (
                      <div className="flex items-center gap-2">
                        <a
                          href={item.subHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1 font-helvetica-light text-[11px] uppercase tracking-widest text-white/50 transition-colors hover:text-accent-purple"
                        >
                          {item.sub}
                          <FiArrowUpRight className="text-[10px] opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                        <span className="rounded-full border border-white/10 px-2 py-0.5 font-helvetica-light text-[8px] uppercase tracking-[0.15em] text-white/30">
                          Subsidiary
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-helvetica-light text-[15px] leading-[1.8] tracking-wide text-gray-400">
              Full-stack developer with hands-on experience building production
              web applications across blockchain, AI, and modern web
              technologies. Specialized in Next.js, TypeScript, and decentralized
              ecosystems. Built 20+ applications spanning livestreaming
              protocols, DeFi dashboards, AI-powered networks, and enterprise
              landing pages.
            </p>
          </div>

          {/* Right: Smoke gradient visual card */}
          <div className="lg:col-span-7">
            <div className="smoke-gradient-1 relative flex min-h-[400px] items-end overflow-hidden rounded-2xl p-8 md:p-10">
              <div className="relative z-10">
                <Image
                  src="/nucast_logo.svg"
                  alt="Nucast Logo"
                  width={40}
                  height={40}
                  className="mb-4 opacity-80 rounded object-contain"
                />
                <span className="mb-3 block font-helvetica-light text-[11px] uppercase tracking-[0.3em] text-white/60">
                  Currently at
                </span>
                <h3 className="mb-2 font-thunder-bold text-4xl uppercase tracking-wide text-white md:text-5xl">
                  Nucast Pte. Ltd.
                </h3>
                <p className="max-w-md font-helvetica-light text-sm leading-relaxed text-white/70">
                  Building the future of decentralized content — livestreaming,
                  subscriptions, authentication, and AI agents on the
                  blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
