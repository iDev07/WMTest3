import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
function MainSingle() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("newsPage.news2")}</title>
      </Head>
      <div className="MainSingle">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <h2>{t("newsPage.news3")}</h2>
              <img src="../../images/news/news3.jpg" alt="img" />
              <p>{t("newsPage.fullNews3")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSingle;
