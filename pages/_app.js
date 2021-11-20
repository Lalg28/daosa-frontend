import "./../public/css/style.css";
import "./../public/css/animate.min.css";
import "./../public/css/fontawesome-all.min.css";
import "./../public/css/flaticon.css";
import "./../public/css/meanmenu.css";
import "./../public/css/icofont.min.css";
import "./../public/css/datepicker.min.css";
import "./../public/css/magnific-popup.css";
import "./../public/css/nice-select.css";
import "metismenujs/dist/metismenujs.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Head from "next/head";
import generateStore from "../redux/store";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  });

  const store = generateStore();

  return (
    <Provider store={store}>
      <Head>
        <meta charset="utf-8" />
        <title>Daosa</title>
        <meta name="description" content="Developed by TrendyCoder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="./img/favicon.png"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
