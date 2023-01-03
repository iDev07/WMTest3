import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        /> */}

        <meta
          name="description"
          content="Группа компаний World Miral – крупная компания с многолетним опытом работы в Узбекистане. В нашу компанию входят предприятия и фирмы, специализирующиеся на производстве, экспорте, консалтинге и импорте."
        />
        <link rel="icon" href="new_logo.svg" />
        <meta name="author" content="iDev07" />

        <meta
          name="keywords"
          content="WORLDMIRAL, Worldmiral, World Miral group, World Miral company, World Miral uz"
        />

        <meta property="og:title" content="World Miral Grpup" />
        <meta
          property="og:description"
          content="Группа компаний World Miral – крупная компания с многолетним опытом работы в Узбекистане. В нашу компанию входят предприятия и фирмы, специализирующиеся на производстве, экспорте, консалтинге и импорте."
        />
        <meta
          property="og:image"
          content="http://worldmiral.com/static/media/logo.cc6b24336917bd54a104484b70b8e4b4.svg"
        />
        <meta property="og:image:width" content="780" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="World Miral" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Группа компаний World Miral" />
        <meta
          property="twitter:description"
          content="Группа компаний World Miral – крупная компания с многолетним опытом работы в Узбекистане. В нашу компанию входят предприятия и фирмы, специализирующиеся на производстве, экспорте, консалтинге и импорте."
        />
        <meta
          property="twitter:image"
          content="http://worldmiral.com/static/media/logo.cc6b24336917bd54a104484b70b8e4b4.svg"
        />
        <meta
          name="msapplication-TileImage"
          content="http://worldmiral.com/static/media/logo.cc6b24336917bd54a104484b70b8e4b4.svg"
        />
        <title>World Miral - Группа компаний</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
