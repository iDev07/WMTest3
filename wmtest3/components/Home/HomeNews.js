import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";
function HomeNews() {
  return (
    <div className="HomeNews">
      <div className="containerdev">
        <div className="wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation]}
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
