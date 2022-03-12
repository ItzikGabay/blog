import type { AppProps } from "next/app";
import { Header } from "../layout/header/header";
import Footer from "../layout/footer/footer";

import "material-icons/iconfont/material-icons.css";
import "../styles/app/reset.css";
import "../styles/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
