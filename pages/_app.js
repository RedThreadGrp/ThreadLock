// pages/_app.js
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/legal/CookieBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <CookieBanner />
    </>
  );
}
