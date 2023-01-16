"use client";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import i18n from "../i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
function MobileHeader() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [subMenu1, setSubMenu1] = useState("submenu1");
  const [subMenu2, setSubMenu2] = useState("submenu2");
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mob_nav">
        <div className="wrapper">
          <div className="left">
            <div className="select">
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
          </div>
          <div className="centre">
            <Link href="/">
              <img src="../../new_logo.svg" alt="World Miral logo" />
            </Link>
          </div>
          <button className="mob_btn" onClick={handleShow}>
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className="socials"></div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="quick_links">
              <li onClick={handleClose}>
                <Link href="/"> {t("menu.main1")}</Link>
              </li>
              <li>
                <p
                  onClick={() => {
                    setSubMenu1("activeSub1");
                  }}
                >
                  {" "}
                  {t("menu.main2")}
                  <ExpandMoreIcon />
                </p>
                <ul className={`submenu1 ${subMenu1}`}>
                  <li onClick={handleClose}>
                    <Link href="/about-us">{t("submenus.about1")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/team">{t("submenus.about2")}</Link>
                  </li>

                  <li onClick={handleClose}>
                    <Link href="/career">{t("submenus.about3")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <p
                  onClick={() => {
                    setSubMenu2("activeSub2");
                  }}
                >
                  {" "}
                  {t("menu.main3")} <ExpandMoreIcon />
                </p>
                <ul className={`submenu2 ${subMenu2}`}>
                  <li onClick={handleClose}>
                    <Link href="/marketplace">{t("submenus.direct1")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/produce">{t("submenus.direct2")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/export">{t("submenus.direct4")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/consalting">{t("submenus.direct5")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/IT-services">{t("submenus.direct6")}</Link>
                  </li>
                  <li onClick={handleClose}>
                    <Link href="/promotion">{t("submenus.direct7")}</Link>
                  </li>
                </ul>
              </li>
              <li onClick={handleClose}>
                <Link href="/news"> {t("menu.main4")} </Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/contact"> {t("menu.main5")} </Link>
              </li>
            </ul>
            <div className="mob_footer"></div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(MobileHeader), { ssr: false });
