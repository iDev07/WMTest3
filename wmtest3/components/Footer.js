"use client";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import dynamic from "next/dynamic";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Link from "next/link";
function Footer() {
  return (
    <div className="Footer">
      <div className="containerdev">
        <div className="wrapper">
          <div className="mycol">
            <div className="top_sec">
              <h3>О компании</h3>
            </div>
            <div className="content">
              <p>
                Группа компаний World Miral создана в 2019 году с целью занять
                лидирующие позиции одновременно в нескольких направлениях
                бизнеса.
              </p>
            </div>
            <div className="socials">
              <li>
                <a href="hhtps:">
                  <img src="images/social_instagram.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="images/social_telegram.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="images/social_odno.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="images/social_facebook.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="images/social_vk.png" />
                </a>
              </li>
              <li>
                <a href="hhtps">
                  <img src="images/social_linkedin.png" />
                </a>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div className="top_sec">
              <h3>Наши услуги</h3>
            </div>
            <div className="content">
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Экспорт продукции
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Консалтинговые услуги
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Производство товаров
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Наружная реклама
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Экспорт продукции
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Услуги IT-сферы
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Маркетплейс
                </Link>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div className="top_sec">
              <h3>Полезные ссылки</h3>
            </div>
            <div className="content">
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Карьера в WorldMiral
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />
                  Новости
                </Link>
              </li>
              <li>
                <Link href="">
                  <ArrowForwardIosIcon />О группе компаний
                </Link>
              </li>
            </div>
          </div>
          <div className="mycol">
            <div className="top_sec">
              <h3>Контактные данные</h3>
            </div>
            <div className="content">
              <li>
                <FmdGoodOutlinedIcon /> Узбекистан, г. Ташкент, улица Хумо, 57
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
                <AccessTimeOutlinedIcon /> Пн-Вс | 9.00 - 18.00
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Footer;
export default dynamic(() => Promise.resolve(Footer), { ssr: false });
