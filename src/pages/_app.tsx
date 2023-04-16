import { type AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const interSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <main className={interSans.className}>
      <Component {...pageProps} />
    </main>
  </SessionProvider>
);

export default api.withTRPC(MyApp);
