import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
function HomeNews() {
  return (
    <div className="HomeNews">
      <div className="containerdev">
        <div className="wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>
                      Узбекистан и SAP хотят укрепить сотрудничество в сфере
                      торговли и инвестиций
                    </h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news4.dd42fb72cb55e7b89486.jpg" />
                    </div>
                    <h2>
                      Обсуждены вопросы развития и перспективы мебельной отрасли
                    </h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>Запущен еще один наш проект ALL4U.Market</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>Запущен еще один наш проект ALL4U.Market</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>
                      Узбекистан и SAP хотят укрепить сотрудничество в сфере
                      торговли и инвестиций
                    </h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>
                      Узбекистан и SAP хотят укрепить сотрудничество в сфере
                      торговли и инвестиций
                    </h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>ПОДРОБНЕЕ</p>
                      </div>
                      <img src="http://worldmiral.com/static/media/news3.ff50b22fa819429bcd77.jpg" />
                    </div>
                    <h2>
                      Узбекистан и SAP хотят укрепить сотрудничество в сфере
                      торговли и инвестиций
                    </h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
