// pages/_app.js
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/legal/CookieBanner";

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
    const cookies = ctx.req.headers.cookie.split(';').reduce((acc, cookie) => {
      const parts = cookie.trim().split('=');
      const key = parts[0];
      const value = parts.slice(1).join('='); // Handle values with '=' in them
      acc[key] = value;
      return acc;
    }, {});
    const consentValue = cookies['tl_cc'];
    if (consentValue === 'accept' || consentValue === 'reject') {
      initialConsent = consentValue;
    }
  }
  return { initialConsent };
};
