import type { AppProps } from "next/app";
import { Navbar } from "../layout/header/navbar/navbar";

import "../styles/app/reset.css";
import "../styles/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
