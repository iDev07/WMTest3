import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Partners() {
  return (
    <div className="Partners">
      <div className="">
        <div className="wrapper">
          <Swiper
            slidesPerView={5}
            spaceBetween={2}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
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
                <a href="http://www.turkcert.com.tr/">
                  <img src="images/partners/turkcertlogo.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://uzcharm.uz/uz/">
                  <img src="images/partners/uzcharm.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="">
                  <img
                    src="http://worldmiral.com/static/media/allin.b06f3c57bcc3767b219a.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://makiz.uz/">
                  <img
                    src="http://worldmiral.com/static/media/makiz.41b07fb0d840db2bdcc4.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://nmedov.uz/ru/">
                  <img
                    src="http://worldmiral.com/static/media/nmed.89c3275184cd46825f0e.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.ntholding.uz/">
                  <img
                    src="http://worldmiral.com/static/media/nthh.e784e9ee4fe1077cf122.jpg"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://candy-gold.uz/ru/">
                  <img
                    src="http://worldmiral.com/static/media/candy.962417b073236ed98ea5.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://sunfinite.uz/">
                  <img
                    src="http://worldmiral.com/static/media/sunfinite.238f95046e157e3acd67.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://tst-g.uz/">
                  <img
                    src="http://worldmiral.com/static/media/tst.5e0e56285658879d79c2.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.krember.uz/?lang=ru">
                  <img
                    src="http://worldmiral.com/static/media/krember.33e77de9d9ac49f57263.png"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://wangdagroup.uz/">
                  <img
                    src="http://worldmiral.com/static/media/vwd.a41ba9fe005a472de797.jpg"
                    alt="partner"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Partners;
