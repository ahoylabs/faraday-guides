import React from "react";
import { Inter } from "next/font/google";
import { AppType } from "next/app";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
