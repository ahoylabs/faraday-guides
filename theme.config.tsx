import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";

const title = "Faraday.dev | Guides";
const description = "Official guides for Faraday.dev";
// TODO: add a custom og image
const targetOGImage = "https://faraday.dev/og-image2.png";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Faraday",
      };
    }
  },
  logoLink: "https://faraday.dev",
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
      <title>Faraday.dev | Guides</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:url" content="https://docs.faraday.dev" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={targetOGImage} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="docs.faraday.dev" />
      <meta property="twitter:url" content="https://docs.faraday.dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={targetOGImage} />
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
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
