import React from "react";
import Head from "next/head";
import { Heading } from "../components/Heading";
import { useTranslation } from "react-i18next";
import Introduction from "../components/Home/Introduction";
import Advantages from "../components/Home/Advantages";
import Directions from "../components/Home/Directions";
import HomeNews from "../components/Home/HomeNews";
import Partners from "../components/Home/Partners";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("aboutPage.intro")}</title>
        <meta name="description" content="Created by iDev07" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="new_logo.svg" />
      </Head>
      <main className="main">
        <Introduction />
        <Heading
          name={"Почему нам доверяют ?"}
          name_page={"Присоединяйтесь к нам"}
          link={"/join-us"}
          number={"01"}
        />
        <Advantages />
        <Heading
          name={"Направления бизнеса"}
          name_page={"посмотреть всё"}
          link={"/join-us"}
          number={"02"}
        />
        <Directions />
        <Heading
          name={"Наши новости"}
          name_page={"посмотреть всё"}
          link={"/join-us"}
          number={"03"}
        />
        <HomeNews />
        <Heading
          name={"НАШИ ПАРТНЁРЫ"}
          name_page={"посмотреть всё"}
          link={"/partners"}
          number={"04"}
        />
        <Partners />
      </main>
    </>
  );
}
