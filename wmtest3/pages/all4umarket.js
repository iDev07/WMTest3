import Head from "next/head";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "animate.css";
// import "../components/styles/all4umarket.scss";
function All4uMarket() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("bDirections.mIntro")}</title>
      </Head>
      <div className="All4uMarket">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__fadeInBottomRight">
                  {t("bDirections.mIntro")}
                  <p className="exists_p">{t("bDirections.mShortIntro")}</p>
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
        <LineHeading name_section={"ALL4U MARKET"} />
        <div className="about_project light_dark">
          <div className="containerdev">
            <p className="uni_p">{t("bDirections.mSmallAbout")}</p>
            <div className="results_numbers">
              <div className="num_wrapper">
                <div className="mycol">
                  <div className="inner_wrap">
                    <CountUp end={1669} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <p>{t("bDirections.mFacts1")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="inner_wrap">
                    <div className="for_plus">
                      <CountUp end={`16000`} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <span
                        style={{
                          marginLeft: "3px",
                        }}
                      >
                        +
                      </span>
                    </div>
                    <p>{t("bDirections.mFacts2")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="inner_wrap">
                    <CountUp end={37} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <p>{t("bDirections.mFacts3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("bDirections.mHeadingGoals")} />
        <div className="offers">
          <div className="p-5 light_dark ">
            <div className="containerdev">
              <div className="wrapper_offers">
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>{t("bDirections.mTask1")}</p>
                    <ul>
                      <li>{t("bDirections.mTask1br1")}</li>
                      <li>{t("bDirections.mTask1br2")}</li>
                      <li>{t("bDirections.mTask1br3")}</li>
                    </ul>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>{t("bDirections.mTask2")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>{t("bDirections.mTask3")}</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>{t("bDirections.mTask4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("bDirections.mServices")} />
        <div className="all4u_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper">
              <div className="mycol">
                <a href="https://all4u.market/wholesale/services/garantee/">
                  <div className="inner_wrap">
                    <img src="images/services1.png" />
                  </div>
                  <h3>{t("bDirections.mSec1")}</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="https://all4u.market/wholesale/services/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F/">
                  <div className="inner_wrap">
                    <img src="images/services2.png" />
                  </div>
                  <h3>{t("bDirections.mSec2")}</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="https://all4u.market/wholesale/services/dilevery/">
                  <div className="inner_wrap">
                    <img src="images/services3.png" />
                  </div>
                  <h3>{t("bDirections.mSec3")}</h3>
                </a>
              </div>
              <div className="mycol">
                <Link href="/advertising">
                  <div className="inner_wrap">
                    <img src="images/services4.png" />
                  </div>
                  <h3>{t("bDirections.mSec4")}</h3>
                </Link>
              </div>
              <div className="mycol">
                <a href="https://all4u.market/wholesale/services/declaration-ru/">
                  <div className="inner_wrap">
                    <img src="images/services5.png" />
                  </div>
                  <h3>{t("bDirections.mSec5")}</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="link_all4u p-5 light_dark">
          <div className="wrapper">
            <a href="https://all4u.market" className="border_g">
              {t("bDirections.goAll4u")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default All4uMarket;
