import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import Image from "next/image";
import { useTranslation } from "react-i18next";
function produce() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("bDirections.pIntro")}</title>
      </Head>
      <div className="Produce">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">{t("bDirections.pIntroOrigin")}</h1>
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
        <LineHeading name_section={"DIAGNOKIM SOLUTIONS"} />
        <div className="about_diagnokim  p-5 light_dark">
          <div className="containerdev">
            <div className="content_wrapper ">
              <div className="left_box">
                <p>{t("bDirections.pLeftDesc")}</p>
                <p>{t("bDirections.pRightDesc")}</p>
                <p>{t("bDirections.pBottomDesc")}</p>
              </div>
              <div className="right_box">
                <img src="images/diagnokim.png" alt="Diagnokim Solutions" />
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("bDirections.pMission")} />
        <div className="like_advantages p-5 light_dark">
          <div className="containerdev">
            <h1 className="t_center">{t("bDirections.pIntro")}</h1>
            <div className="p-5 link_catalog">
              <a href="https://diagnokim.uz" className="border_g">
                {t("bDirections.pCatalog")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default produce;
