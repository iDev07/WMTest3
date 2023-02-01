import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "animate.css";
function Export() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("bDirections.eIntro")}</title>
      </Head>
      <div className="Export">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__lightSpeedInLeft">
                  {t("bDirections.eIntro")}
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
        <LineHeading name_section={t("bDirections.eHeading1")} />
        <div className="somecontent light_dark">
          <div className="containerdev">
            <p className="uni_p">{t("bDirections.eSmallAbout")}</p>
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
                <p>{t("bDirections.eNum1")}</p>
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
                <p>{t("bDirections.eNum2")}</p>
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
                <p>{t("bDirections.eNum3")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_facts light_dark ">
          <div className="containerdev">
            <div className="grid-5">
              <div className="right_box mr-3">
                <p className="dark">{t("bDirections.eLeft")}</p>
              </div>
              <div className="left_box ml-3">
                <p className="dark">{t("bDirections.eRight")}</p>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={t("partners.intro")} />
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
            <a href="tel: +998 71 230 38 83" className="border_g">
              {t("bDirections.eOrder")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Export;
