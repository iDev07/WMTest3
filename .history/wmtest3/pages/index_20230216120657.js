import React from "react";
import Head from "next/head";
import { Heading } from "../components/Heading";
import { useTranslation } from "react-i18next";
import Introduction from "../components/Home/Introduction";
import Advantages from "../components/Home/Advantages";
import Directions from "../components/Home/Directions";
import HomeNews from "../components/Home/HomeNews";
import Partners from "../components/Home/Partners";
import Particles from "../components/Particles";
import { getPosts } from "../services";
export default function Home({ posts }) {
  const { t } = useTranslation();
  console.log(posts);
  return (
    <>
      <Head>
        <title>{t("aboutPage.intro")}</title>
        <meta name="description" content="Created by iDev07" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="new_logo.svg" />
      </Head>
      <main className="main">
        <Particles />
        <Introduction />

        <Heading
          name={t("whywe.intro")}
          name_page={"Присоединяйтесь к нам"}
          link={"/"}
          number={"01"}
        />
        <Advantages />
        <Heading
          name={t("directions.intro")}
          name_page={"посмотреть всё"}
          link={"/produce"}
          number={"02"}
        />
        <Directions />
        <Heading
          name={t("news.intro")}
          name_page={"посмотреть всё"}
          link={"/news/blog"}
          number={"03"}
        />
        <HomeNews />
        <Heading
          name={t("partners.intro")}
          name_page={"посмотреть всё"}
          link={"/export"}
          number={"04"}
        />
        <Partners />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
