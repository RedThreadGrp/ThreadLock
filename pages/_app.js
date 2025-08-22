// pages/_app.js
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500","700","800"] });

export default function App({ Component, pageProps }) {
  return <main className={font.className}><Component {...pageProps} /></main>;
}
