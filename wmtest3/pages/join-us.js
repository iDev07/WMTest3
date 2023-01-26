import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import { useTranslation } from "react-i18next";
function JoinUs() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("aboutPage.carrerIntro")}</title>
      </Head>
      <div className="JoinUs">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  {t("aboutPage.carrerIntro")}
                  <p>{t("aboutPage.carrerDesc")}</p>
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
        <LineHeading name_section={t("aboutPage.headingAdvan")} />
        <div className="advantages_company">
          <div className="containerdev">
            <div className="uni_p">
              <p>{t("aboutPage.smallAbout1")}</p>
            </div>
            <div className="wrapper">
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer1.png" />
                </div>
                <p>{t("aboutPage.adventages1")}</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer2.png" />
                </div>
                <p>{t("aboutPage.adventages2")}</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer3.png" />
                </div>
                <p>{t("aboutPage.adventages3")}</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer4.png" />
                </div>
                <p>{t("aboutPage.adventages4")}</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer5.png" />
                </div>
                <p>{t("aboutPage.adventages5")}</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer6.png" />
                </div>
                <p>{t("aboutPage.adventages6")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="youngs_back">
          <div className="wrapper">
            <div className="containerdev">
              <h1 className="heading">{t("aboutPage.students")}</h1>
            </div>
          </div>
        </div>
        <div className="light_dark ">
          <div className="containerdev">
            <p className="uni_p">{t("aboutPage.smallAbout3")}</p>
          </div>
        </div>
        <LineHeading name_section={t("aboutPage.headingValues")} />
        <div className="company_values">
          <div className="containerdev">
            <p>{t("aboutPage.smallAbout2")}</p>
            <div className="wrapper">
              <ul>
                <li>{t("aboutPage.done1")}</li>
                <li>{t("aboutPage.done2")}</li>
                <li>{t("aboutPage.done3")}</li>
                <li>{t("aboutPage.done4")}</li>
              </ul>
              <ul>
                <li>{t("aboutPage.done5")}</li>
                <li>{t("aboutPage.done6")}</li>
                <li>{t("aboutPage.done7")}</li>
                <li>{t("aboutPage.done8")}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="vacancies">
          <div className="wrapper">
            <div className="containerdev">
              <div className="top_section">
                <h1>доступные вакансии</h1>
              </div>
              <div className="wrapper_cols">
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default JoinUs;
