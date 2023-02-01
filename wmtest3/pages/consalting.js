import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import { useTranslation } from "react-i18next";
import "animate.css";
function Consalting() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("bDirections.conIntro")}</title>
      </Head>
      <div className="Consalting">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__fadeInTopRight">
                  {t("bDirections.conIntro")}
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
        <LineHeading name_section={t("bDirections.conIntro2")} />
        <div className="about_facts light_dark p-5">
          <div className="containerdev">
            <div className="grid-5">
              <div className="right_box mr-3">
                <p className="dark">{t("bDirections.conLeft")}</p>
              </div>
              <div className="left_box ml-3">
                <p className="dark">{t("bDirections.conRight")}</p>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("bDirections.conTitle")} />
        <div className="ads_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper_ads">
              <div className="left_box">
                <div className="for_img">
                  <img src="images/iso2015.png" />
                </div>
              </div>
              <div className="right_box">
                <h2>{t("bDirections.certName1")}</h2>
                <p>{t("bDirections.certDesc1")}</p>
              </div>
            </div>
            <div className="wrapper_ads_reverse">
              <div className="left_box">
                <h2>{t("bDirections.certName2")}</h2>
                <p>{t("bDirections.certDesc2")}</p>
              </div>
              <div className="right_box">
                <div className="for_img">
                  <img src="images/greeniso.png" />
                </div>
              </div>
            </div>
            <div className="wrapper_ads">
              <div className="left_box">
                <div className="for_img">
                  <img src="images/iso2005.png" />
                </div>
              </div>
              <div className="right_box">
                <h2>{t("bDirections.certName3")}</h2>
                <p>{t("bDirections.certDesc3")}</p>
              </div>
            </div>
            <div className="wrapper_ads_reverse">
              <div className="left_box">
                <h2>{t("bDirections.certName4")}</h2>
                <p>{t("bDirections.certDesc4")}</p>
              </div>
              <div className="right_box">
                <div className="for_img">
                  <img src="images/iso2018.png" />
                </div>
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
export default Consalting;
