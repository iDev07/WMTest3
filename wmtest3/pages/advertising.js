import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
function Advertising() {
  return (
    <>
      <Head>
        <title>Produce</title>
      </Head>
      <div className="Advertising">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  <span>наружная</span> реклама
                  <p>
                    Полноценный маркетинг начиная от продвижения на платформе
                    ALL4U.MARKET и заканчивая продвижением через различные
                    социальные платформы по всему миру
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
        <LineHeading name_section={"Предоставляемые услуги"} />
        <div className="ads_services light_dark p-5">
          <div className="containerdev">
            <div className="wrapper_ads">
              <div className="left_box">
                <div className="for_img">
                  <img src="images/ads1.png" />
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
            <div className="wrapper_ads_reverse">
              <div className="left_box">
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
                  <img src="images/karnay.png" />
                </div>
              </div>
            </div>
            <div className="wrapper_ads">
              <div className="left_box custom">
                <div className="for_img ">
                  <img src="images/analytics.png" />
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
export default Advertising;
