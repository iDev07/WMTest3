import Head from "next/head";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
function All4uMarket() {
  return (
    <>
      <Head>
        <title>ALL4U Market</title>
      </Head>
      <div className="All4uMarket">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  <span>ВПЕРВЫЕ</span> В СТАРАНХ СНГ
                  <p className="exists_p">
                    Наша компания запустила международный Маркетплейс
                    ALL4U.market, в котором собраны товары со всего мира.
                  </p>
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
            <p className="uni_p">
              Наша онлайн – платформа предназначена для всех производителей
              экспорто ориентированных товаров, для всех пользователей чья
              деятельность связанна с импортом товаров, а также для физических
              лиц кому интересны покупки товаров онлайн. В первые мы даём
              возможность зарабатывать вместе с нами. Покупать оптом у нас и
              через нашу платформу и так же у нас продавать в розницу. Главными
              критериями являются цена и качество продукции. Наш Маркетплейс
              выступает в роли посредника, помогая и облегчая продавцам и
              покупателям найти друг друга.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default All4uMarket;
