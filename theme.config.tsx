import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div>
      <Image src={"/favicon.png"} width={32} height={32} alt={"Logo"} />
    </div>
  ),
  chat: {
    link: "https://discord.gg/Ng4vmcDfqr",
  },
  docsRepositoryBase: "https://github.com/ahoylabs/faraday-guides",
  footer: {
    text: "2023 © Ahoy Labs",
  },
  head: (
    <>
      <title>Faraday Guides</title>
      <meta name="description" content="Official guides for Faraday.dev" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </>
  ),
  // this is a hack to hide the edit link
  editLink: {
    text: "Edit this page on GitHub",
    component: () => {
      return <></>;
    },
  },
  feedback: {
    content: "Suggestions? Open a Github Issue!",
  },
};

export default config;
