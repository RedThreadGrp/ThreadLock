// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500","700","800"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ThreadLock™ | Family Law Technology</title>
        <meta
          name="description"
          content="AI-powered family law software for custody disputes, child support, and family court evidence management."
        />
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
