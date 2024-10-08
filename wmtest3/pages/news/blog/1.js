import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
function MainSingle() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("news.news1")}</title>
      </Head>
      <div className="MainSingle">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <h2>{t("news.news1")}</h2>
              <img src="../../images/news/news1.webp" alt="img" />
              <p>{t("news.fullNews1")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSingle;
