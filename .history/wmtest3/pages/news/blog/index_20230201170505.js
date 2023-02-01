import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "animate.css";
function News() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("newsPage.intro")}</title>
        <link href="../../new_logo.svg" rel="icon " />
      </Head>
      <div className="News">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__slideInUp">
                  <span>{t("newsPage.intro")}</span>
                  <p>{t("newsPage.companyNews")}</p>
                </h1>
                <div className="wrapper_animation">
                  <div className="down_animation">
                    <div>
                      <ExpandMoreIcon className="first" />
                    </div>
                    <div>
                      <ExpandMoreIcon className="second" />
                    </div>
                    <div>
                      <ExpandMoreIcon className="third" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_news p-5 light_dark">
          <div className="containerdev">
            <div className="wrapper grid-3">
              <div className="mycol">
                <Link href="/news/blog/1">
                  <div className="top_img">
                    <img src="../images/news/news1.webp" />
                  </div>
                  <h2>{t("news.news1")}</h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/blog/2">
                  <div className="top_img">
                    <img src="../images/news/news2.png" />
                  </div>
                  <h2>{t("newsPage.news2")}</h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/blog/3">
                  <div className="top_img">
                    <img src="../images/news/news3.jpg" />
                  </div>
                  <h2>{t("newsPage.news3")}</h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/blog/4">
                  <div className="top_img">
                    <img src="../images/news/news4.png" />
                  </div>
                  <h2>{t("newsPage.news4")}</h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/blog/5">
                  <div className="top_img">
                    <img src="../images/news/news5.jpg" />
                  </div>
                  <h2>{t("newsPage.news5")}</h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/blog/6">
                  <div className="top_img">
                    <img src="../images/news/news6.jpg" />
                  </div>
                  <h2>{t("newsPage.news6")}</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
// How to send props around components in REact js?
