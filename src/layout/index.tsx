import Head from "next/head";
import Navbar from "~/components/navbar";

const SITE_URL = "https://shubhanshu.online";
const SITE_TITLE = "Shubhanshu Saxena | Portfolio";
const SITE_DESCRIPTION =
  "Full-stack developer specializing in Next.js, TypeScript, and Web3. 20+ production applications across blockchain, AI, and modern web technologies.";

const Layout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  const pageTitle = title ? `${title} | Shubhanshu Saxena` : SITE_TITLE;
  const pageDescription = description ?? SITE_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content="Shubhanshu Saxena" />
        <meta property="og:image" content={`${SITE_URL}/og-banner.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Shubhanshu1453" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/og-banner.png`} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="preload" href="/fonts/thunder/Thunder-ExtraBoldLC_800.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/helvetica/HelveticaNeue-Light.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/neue-machina/PPNeueMachina-PlainLight.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <main className="relative min-h-screen w-full bg-primary text-secondary font-neue-light tracking-wider">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
