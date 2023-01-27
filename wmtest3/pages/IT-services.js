import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import { useTranslation } from "react-i18next";
function ITservices() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("bDirections.proIntro")}</title>
      </Head>
      <div className="ITservices">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">{t("bDirections.proIntro")}</h1>
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
        <LineHeading name_section={t("bDirections.proTitle")} />
        <div className="ads_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper_ads">
              <div className="left_box">
                <div className="for_img">
                  <img src="images/it1.png" />
                </div>
              </div>
              <div className="right_box">
                <h2>{t("bDirections.proDirect1")}</h2>
                <p>{t("bDirections.proDirectTitle1")}</p>
              </div>
            </div>
            <div className="wrapper_ads_reverse">
              <div className="left_box">
                <h2>{t("bDirections.proDirect2")}</h2>
                <p>{t("bDirections.proDirectTitle2")}</p>
              </div>
              <div className="right_box">
                <div className="for_img">
                  <img src="images/it2.png" />
                </div>
              </div>
            </div>
            <div className="wrapper_ads">
              <div className="left_box custom">
                <div className="for_img ">
                  <img src="images/it3.png" />
                </div>
              </div>
              <div className="right_box">
                <h2>{t("bDirections.proDirect3")}</h2>
                <p>{t("bDirections.proDirectTitle3")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="link_all4u pb-5 light_dark">
          <div className="wrapper">
            <a href="tel: +998 71 230 38 83" className="border_g">
              {t("bDirections.eOrder")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ITservices;
