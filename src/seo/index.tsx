import { Helmet } from "react-helmet-async";

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
      <meta name="theme-color" content="#17b8a6" />
    </Helmet>
  );
};
