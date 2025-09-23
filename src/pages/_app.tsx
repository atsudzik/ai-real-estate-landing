import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import Providers from "@/app/providers";
import "@/app/globals.css";

type CustomAppProps = AppProps<{ session?: Session | null }>;

const App = ({ Component, pageProps }: CustomAppProps) => {
  const { session, ...rest } = pageProps;

  return (
    <Providers session={session}>
      <Component {...rest} />
    </Providers>
  );
};

export default App;
