import Link from "next/link";
import React from "react";
import Flash from "react-reveal/Flash";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Introduction() {
  return (
    <div className="Introduction">
      <div className="wrapper">
        <div className="back_video">
          <video src="main_back.mp4" autoPlay loop muted />
        </div>
        <div className="content">
          <div className="main containerdev">
            <h1 className="heading">
              <span>СОЗДАЁМ</span> ПРОДУКТЫ ДЛЯ ЛЮДЕЙ
            </h1>
            <p className="short_about">
              Группа компаний World Miral – крупная компания с многолетним
              опытом работы в Узбекистане. В нашу компанию входят предприятия и
              фирмы, специализирующиеся на производстве, экспорте, консалтинге и
              импорте.
            </p>
            <div className="border_g">
              <Link href="about-us">УЗНАТЬ ПОДРОБНЕЕ</Link>
            </div>
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
  );
}

export default Introduction;
