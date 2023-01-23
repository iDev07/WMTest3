"use client";
import React, { useState, useEffect, use } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import dynamic from "next/dynamic";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Footer() {
  const [activeSub1, setActiveSub1] = useState("notactive1");
  const [activeSub2, setActiveSub2] = useState("notactive2");
  const [activeSub3, setActiveSub3] = useState("notactive3");
  const [activeSub4, setActiveSub4] = useState("notactive4");
  const thisYear = new Date().getFullYear().toString();
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="containerdev">
        <div className="wrapper">
          <div className="mycol">
            <div className="top_sec">
              <h3>{t("footer.heading1")}</h3>
            </div>
            <div className="content">
              <p>{t("footer.shortAbout")}</p>
            </div>
            <div className="socials">
              <li>
                <a href="https://www.instagram.com/all4u.market/">
                  <img src="../../images/social_instagram.png" />
                </a>
              </li>
              <li>
                <a href="https://t.me/all4umarket">
                  <img src="../../images/social_telegram.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="../../images/social_odno.png" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/worldmiral.llc/">
                  <img src="../../images/social_facebook.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="../../images/social_vk.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="../../images/social_linkedin.png" />
                </a>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div
              className="top_sec"
              onClick={() => {
                setActiveSub1("activeSub1");
              }}
            >
              <h3>{t("footer.heading2")}</h3>
            </div>
            <div className={`content  ${activeSub1}`}>
              <li>
                <Link href="/export">
                  <ArrowForwardIosIcon />
                  {t("footer.link1")}
                </Link>
              </li>
              <li>
                <Link href="/consalting">
                  <ArrowForwardIosIcon />
                  {t("footer.link2")}
                </Link>
              </li>
              <li>
                <Link href="/produce">
                  <ArrowForwardIosIcon />
                  {t("footer.link3")}
                </Link>
              </li>
              <li>
                <Link href="/advertising">
                  <ArrowForwardIosIcon />
                  {t("footer.link4")}
                </Link>
              </li>

              <li>
                <Link href="/IT-services">
                  <ArrowForwardIosIcon />
                  {t("footer.link5")}
                </Link>
              </li>
              <li>
                <Link href="/all4umarket">
                  <ArrowForwardIosIcon />
                  {t("footer.link6")}
                </Link>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div
              className="top_sec"
              onClick={() => {
                setActiveSub2("activeSub2");
              }}
            >
              <h3>{t("footer.heading3")}</h3>
            </div>
            <div className={`content  ${activeSub2}`}>
              <li>
                <Link href="/join-us">
                  <ArrowForwardIosIcon />
                  {t("footer.link7")}
                </Link>
              </li>
              <li>
                <Link href="/news/blog">
                  <ArrowForwardIosIcon />
                  {t("footer.link8")}
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <ArrowForwardIosIcon />
                  {t("footer.link9")}
                </Link>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div
              className="top_sec"
              onClick={() => {
                setActiveSub3("activeSub3");
              }}
            >
              <h3>{t("footer.heading4")}</h3>
            </div>
            <div className={`content  ${activeSub3}`}>
              <li>
                <FmdGoodOutlinedIcon /> {t("footer.link10")}
              </li>
              <li>
                <a href="tel: +99871 230 38 83">
                  {" "}
                  <CallOutlinedIcon /> +998 71 230 38 83
                </a>
              </li>
              <li>
                <EmailOutlinedIcon />
                info@example.com
              </li>
              <li>
                <AccessTimeOutlinedIcon />
                {t("footer.link11")}
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_copyright">
        <div className="containerdev">
          <div className="right_box">
            <p>
              {`WorldMiral © ${thisYear} | `} {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Footer;
export default dynamic(() => Promise.resolve(Footer), { ssr: false });
// How to take current year in JavaScript?
