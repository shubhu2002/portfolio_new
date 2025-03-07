import { useEffect, useState } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import Lenis from "@studio-freight/lenis";
import "~/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (<QueryClientProvider client={queryClient}><Component {...pageProps} /></QueryClientProvider>);
};

export default MyApp;
