import { Helmet } from "react-helmet-async";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

export const PortfolioHelmet = () => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>Nika Ebralidze | Full Stack Developer</title>
      <meta
        name="description"
        content="Nika Ebralidze is a Full Stack Developer specializing in React, TypeScript, Node.js and modern web applications. View projects, skills and experience."
      />
      <meta name="author" content="Nika Ebralidze" />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href="https://nikaebralidze.dev/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Nika Ebralidze | Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Full Stack Developer focused on scalable, high-quality web applications using React, TypeScript and Node.js."
      />
      <meta property="og:url" content="https://nikaebralidze.dev/" />
      {/* <meta
        property="og:image"
        content="https://nikaebralidze.dev/og-image.png"
      /> */}
      <meta property="og:site_name" content="Nika Ebralidze" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Nika Ebralidze | Full Stack Developer"
      />
      <meta
        name="twitter:description"
        content="Modern Full Stack Developer portfolio built with React & TypeScript."
      />
      {/* <meta
        name="twitter:image"
        content="https://nikaebralidze.dev/og-image.png"
      /> */}

      {/* Theme color (browser & mobile) */}
      <meta name="theme-color" content="#E10600" />
    </Helmet>
  );
};

export const ContactHelmet = () => {
  const t = useLocalizedText("contact.seo");
  const title = t("title");
  const description = t("description");
  const url = "https://nikaebralidze.dev/contact";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Nika Ebralidze" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Nika Ebralidze" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="theme-color" content="#E10600" />
    </Helmet>
  );
};
