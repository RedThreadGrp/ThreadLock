// pages/_app.js
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/legal/CookieBanner";
import { parse } from "cookie";

export default function App({ Component, pageProps, initialConsent }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <CookieBanner initialConsent={initialConsent} />
    </>
  );
}

App.getInitialProps = async ({ ctx }) => {
  // Read cookie on server-side
  let initialConsent = null;
  if (ctx.req?.headers.cookie) {
    const cookies = parse(ctx.req.headers.cookie);
    const consentValue = cookies['tl_cc'];
    if (consentValue === 'accept' || consentValue === 'reject') {
      initialConsent = consentValue;
    }
  }
  return { initialConsent };
};
