import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import { useTranslation } from "react-i18next";
import "animate.css";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("aboutPage.intro")}</title>
      </Head>
      <div className="About">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__fadeInLeft ">
                  {t("aboutPage.intro")}
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
        <LineHeading name_section={t("aboutPage.heading1")} />
        <div className="about_company">
          <div className="containerdev">
            <p className="simple_text">{t("aboutPage.aboutCompany")}</p>
            <div className="boss">
              <div className="wrapper">
                <div className="left_box">
                  {/* <img src="images/boss.png" /> */}
                </div>
                <div className="right_box">
                  <h1>{t("aboutPage.directorName")}</h1>
                  <p className="title">{t("aboutPage.directorPosition")}</p>
                  <p className="about_boss">{t("aboutPage.directorAbout")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("aboutPage.values")} />
        <div className="values">
          <div className="Advantages">
            <div className="containerdev">
              <div className="wrapper">
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan1.png" />
                    <h3>{t("aboutPage.valuestitle1")}</h3>
                    <p>{t("aboutPage.valuesDesc1")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan2.png" />
                    <h3>{t("aboutPage.valuestitle2")}</h3>
                    <p>{t("aboutPage.valuesDesc2")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>{t("aboutPage.valuestitle3")}</h3>
                    <p>{t("aboutPage.valuesDesc3")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>{t("aboutPage.valuestitle4")}</h3>
                    <p>{t("aboutPage.valuesDesc4")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>{t("aboutPage.valuestitle5")}</h3>
                    <p>{t("aboutPage.valuesDesc5")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>{t("aboutPage.valuestitle6")}</h3>
                    <p>{t("aboutPage.valuesDesc6")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
