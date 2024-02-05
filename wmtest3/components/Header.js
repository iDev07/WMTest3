"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Header() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const [scroll, setScroll] = useState("");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        setScroll("");
      } else {
        setScroll("scrolled");
      }
    });
  }
  const { t } = useTranslation();
  return (
    <div className={`header_wrapper ${scroll}`}>
      <div className="header containerdev">
        <div className="left_wrapper">
          <Link href="/">
            <img src="../../new_logo.svg" alt="This a logo" />
            <h2>WorldMiral</h2>
          </Link>
        </div>
        <div className="right_wrapper">
          <div className="main_links">
            <ul className="main_header_ul">
              <div className="div_called_li">
                <Link href="/about-us">{t("menu.main2")}</Link>
                <div className="hidden_links_one">
                  <li>
                    <Link href="/about-us">{t("submenus.about1")}</Link>
                  </li>
                  <li>
                    <Link href="/team-members">{t("submenus.about2")}</Link>
                  </li>
                  <li>
                    <Link href="/join-us">{t("submenus.about3")}</Link>
                  </li>
                </div>
              </div>
              <div className="div_called_li">
                <Link href="/produce">{t("menu.main3")}</Link>
                <div className="hidden_links_one">
                  <li>
                    <Link href="/produce">{t("submenus.direct1")}</Link>
                  </li>
                  <li>
                    <Link href="/export">{t("submenus.direct2")} </Link>
                  </li>
                  <li>
                    <Link href="/IT-services">{t("submenus.direct3")}</Link>
                  </li>
                  <li>
                    <Link href="/advertising">{t("submenus.direct4")}</Link>
                  </li>
                  <li>
                    <Link href="/consalting">{t("submenus.direct5")}</Link>
                  </li>
                </div>
              </div>
              <div className="div_called_li">
                <Link href="/turbomarket">Turbo Market</Link>
                <div className="hidden_links_one extra_links_menu">
                  {/* <li>
                    <Link href="#">Turbo Franchise</Link>
                  </li> */}
                  {/* <li> */}
                  {/* {" "}
                    <Link href="#">Investition</Link>
                  </li> */}
                  <li>
                    <Link href="https://turbotour.uz">Turbo Tour</Link>
                  </li>
                  <li>
                    <Link href="https://miraltour.com">Miral Tour</Link>
                  </li>
                </div>
              </div>
              <div className="div_called_li">
                <Link href="/news/blog">{t("menu.main4")}</Link>
              </div>
              <div className="div_called_li">
                <Link href="/contacts">{t("menu.main5")}</Link>
              </div>
              <div className="div_called_li">
                <select name="lang" value={lang} onChange={handleChange}>
                  <option
                    style={{
                      background: "#232323",
                    }}
                    value="uz"
                  >
                    UZ
                  </option>
                  <option
                    style={{
                      background: "#232323",
                    }}
                    value="ru"
                  >
                    RU
                  </option>
                  <option
                    style={{
                      background: "#232323",
                    }}
                    value="en"
                  >
                    EN
                  </option>
                </select>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Header), { ssr: false });
