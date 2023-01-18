import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
function Consalting() {
  return (
    <>
      <Head>
        <title>Consalting</title>
      </Head>
      <div className="Consalting">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  предлагаем комплексные <span>консалтинговые</span> решения
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
        <LineHeading name_section={"чем занимается наша компания?"} />
        <div className="about_facts light_dark p-5">
          <div className="containerdev">
            <div className="grid-5">
              <div className="right_box mr-3">
                <p className="dark">
                  ALL4U.MARKET - первая универсальная онлайн-платформа, которая
                  позволяет экспортёрам и импортёрам покупать лучший продукт по
                  лучшей цене на международном рынке. Маркетплейс – это
                  оптимизированная торговая площадка для электронной коммерции с
                  готовым набором опций. На начальном этапе построения бизнеса
                  по продаже товаров маркетплейс практически незаменим. С
                  помощью такой торговой площадки проще всего наработать базу
                  лояльных клиентов.
                </p>
              </div>
              <div className="left_box ml-3">
                <p className="dark">
                  ALL IN - Быстрорастущий производитель и поставщик в Средней
                  Азии. Компания занимается сбором и сортировкой овощей, зелени,
                  салатов, фруктов и бобовых культур, и производством сушенной
                  продукцией в Средней Азии. Является одним из лучших
                  представителей в области сбора, сортировки, упаковки, хранения
                  и транспортировки продукции. Склады хранения плодоовощной
                  продукции, расположенные в Ташкентской, Самаркандской,
                  Сурхандарьинской областях, а так же в Ферганской долине
                  площадью более 10000 кв.м.
                </p>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={"сертификаты"} />
        <div className="ads_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper_ads">
              <div className="left_box">
                <div className="for_img">
                  <img src="images/iso2015.png" />
                </div>
              </div>
              <div className="right_box">
                <h2>Сертификат ISO 9001:2015</h2>
                <p>
                  Внешняя реклама – это рекламные сообщения, которые размещены
                  на внешних поверхностях зданий и транспортов. К таким видам
                  реклам относятся: текстовые, графические, либо любые другие
                  описания товаров и услуг. К наружной рекламе относят звуковую
                  рекламу, и это единственный вид, который нельзя
                  проигнорировать. А также рекламные сообщения, которые
                  размещены не только снаружи, но внутри магазинов и торговых
                  площадок.
                </p>
              </div>
            </div>
            <div className="wrapper_ads_reverse">
              <div className="left_box">
                <h2>Сертификат ISO 14001:2015</h2>
                <p>
                  Внешняя реклама – это рекламные сообщения, которые размещены
                  на внешних поверхностях зданий и транспортов. К таким видам
                  реклам относятся: текстовые, графические, либо любые другие
                  описания товаров и услуг. К наружной рекламе относят звуковую
                  рекламу, и это единственный вид, который нельзя
                  проигнорировать. А также рекламные сообщения, которые
                  размещены не только снаружи, но внутри магазинов и торговых
                  площадок.
                </p>
              </div>
              <div className="right_box">
                <div className="for_img">
                  <img src="images/greeniso.png" />
                </div>
              </div>
            </div>
            <div className="wrapper_ads">
              <div className="left_box custom">
                <div className="for_img ">
                  <img src="images/it3.png" />
                </div>
              </div>
              <div className="right_box">
                <p>
                  Внешняя реклама – это рекламные сообщения, которые размещены
                  на внешних поверхностях зданий и транспортов. К таким видам
                  реклам относятся: текстовые, графические, либо любые другие
                  описания товаров и услуг. К наружной рекламе относят звуковую
                  рекламу, и это единственный вид, который нельзя
                  проигнорировать. А также рекламные сообщения, которые
                  размещены не только снаружи, но внутри магазинов и торговых
                  площадок.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="link_all4u pb-5 light_dark">
          <div className="wrapper">
            <a href="https://all4u.market" className="border_g">
              Заказать услугу
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Consalting;
