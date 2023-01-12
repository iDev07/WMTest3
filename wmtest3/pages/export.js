import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
function Export() {
  return (
    <>
      <Head>
        <title>Export</title>
      </Head>
      <div className="Export">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  предоставляем качественный сервис для <span>экспорта</span>
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
        <LineHeading name_section={"о нас"} />
        <div className="somecontent light_dark">
          <div className="containerdev">
            <p className="uni_p">
              Группа компаний World Miral стремится доставлять обширный выбор
              качественных продуктов и товаров на территорию СНГ и Европы. В
              компании успешно работают специалисты с опытом в сфере экспорта на
              протяжении более 10 лет а сама компания начала экспортировать
              товары с 2019 года и успешно продолжается по сей день. С каждым
              годом количество доставляемых товаров и география экспорта
              увеличивается, действия компании расширяются и открываются новые
              горизонты возможностей. Новым этапом наших возможностей стало
              создание международной экспортно-импортной оптово-розничной
              платформы под брендом all4u.market.
            </p>
          </div>
        </div>
        <div className="results_numbers light_dark">
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
        <div className="about_facts light_dark ">
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
        <LineHeading name_section={"партнёры"} />
        <div className="Exportpartners">
          <div className="wrapper">
            <Swiper
              slidesPerView={5}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loopFillGroupWithBlank={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="c_logo">
                  <a href="https://logistic-technology.uz/">
                    <img src="images/partners/partner1.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <a href="https://asstra.uz/otdel-marketinga/">
                    <img src="images/partners/partner7.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="c_logo">
                  <a
                    href="https://hsluz.business.site/website/hsluz/

"
                  >
                    <img src="images/partners/partner6.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <a
                    href="http://unitedlogistic.uz/contact-us/

"
                  >
                    <img src="images/partners/partner5.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <a href="http://www.imtl.uz/">
                    <img src="images/partners/partner4.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="c_logo">
                  <a href="https://transasia.co/ru/">
                    <img src="images/partners/partner3.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <a href="http://delog.uz/">
                    <img src="images/partners/partner2.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <a
                    href="https://ardenatransport.com
"
                  >
                    <img src="images/partners/partner8.png" alt="partner" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
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

export default Export;
