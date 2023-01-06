import Head from "next/head";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
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
                    <p>Companies</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="inner_wrap">
                    <CountUp end={1669} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <p>Companies</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="inner_wrap">
                    <CountUp end={1669} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <p>Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={"цели, которые мы преследуем"} />
        <div className="offers">
          <div className="p-5 light_dark ">
            <div className="containerdev">
              <div className="wrapper_offers">
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>Обеспечить удобную схему оформления заказа:</p>
                    <ul>
                      <li>Выбор товаров и добавление их в корзину;</li>
                      <li>Выбор товаров и добавление их в корзину;</li>
                      <li>Выбор товаров и добавление их в корзину;</li>
                    </ul>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>Обеспечить удобную схему оформления заказа:</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>Обеспечить удобную схему оформления заказа:</p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="correct_icon">
                    <img src="images/correct_icon.svg" />
                  </div>
                  <div className="content">
                    <p>Обеспечить удобную схему оформления заказа:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={"Наши услуги"} />
        <div className="all4u_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper">
              <div className="mycol">
                <a href="">
                  <div className="inner_wrap">
                    <img src="images/services1.png" />
                  </div>
                  <h3>торговая гарантия</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="">
                  <div className="inner_wrap">
                    <img src="images/services2.png" />
                  </div>
                  <h3>торговая гарантия</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="">
                  <div className="inner_wrap">
                    <img src="images/services3.png" />
                  </div>
                  <h3>торговая гарантия</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="">
                  <div className="inner_wrap">
                    <img src="images/services4.png" />
                  </div>
                  <h3>торговая гарантия</h3>
                </a>
              </div>
              <div className="mycol">
                <a href="">
                  <div className="inner_wrap">
                    <img src="images/services5.png" />
                  </div>
                  <h3>торговая гарантия</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="link_all4u p-5 light_dark">
          <div className="wrapper">
            <a href="https://all4u.market" className="border_g">
              перейти на all4u.market
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default All4uMarket;
