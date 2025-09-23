import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import Providers from "@/app/providers";
import "../app/globals.css";

type AppPropsWithSession = AppProps<{ session?: Session | null }>;

export default function App({ Component, pageProps }: AppPropsWithSession) {
  const { session, ...rest } = pageProps;

  return (
    <Providers session={session}>
      <Component {...rest} />
    </Providers>
  );
}
