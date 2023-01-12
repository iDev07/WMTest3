"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import i18n from "../i18n";
function Header() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const [scroll, setScroll] = useState("");

  window.addEventListener("scroll", () => {
    if (window.scrollY < 300) {
      setScroll("");
    } else {
      setScroll("scrolled");
    }
  });
  return (
    <div className={`header_wrapper ${scroll}`}>
      <div className="header containerdev">
        <div className="left_wrapper">
          <Link href="/">
            <img src="../new_logo.svg" alt="This a logo" />
            <h2>WorldMiral</h2>
          </Link>
        </div>
        <div className="right_wrapper">
          <div className="main_links">
            <ul className="main_header_ul">
              <li>
                <Link href="/about-us">О группа компаний</Link>
                <div className="hidden_links_one">
                  <li>
                    <Link href="/about-us">О нас</Link>
                  </li>
                  <li>
                    <Link href="/team-members">Команда</Link>
                  </li>
                  <li>
                    <Link href="/join-us">Карьера</Link>
                  </li>
                </div>
              </li>
              <li>
                <Link href="/tournaments">Направления бизнеса</Link>
                <div className="hidden_links_one">
                  <li>
                    <Link href="/produce">Produce</Link>
                  </li>
                  <li>
                    <Link href="/advertising">Advertising</Link>
                  </li>
                  <li>
                    <Link href="/export">Export </Link>
                  </li>
                </div>
              </li>
              <li>
                <Link href="/all4umarket">ALL4U Market</Link>
              </li>
              <li>
                <Link href="/news/blog">Новости</Link>
              </li>
              <li>
                <Link href="/rating">Контакты</Link>
              </li>
              <li>
                <select name="lang" value={lang} onChange={handleChange}>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Header), { ssr: false });
