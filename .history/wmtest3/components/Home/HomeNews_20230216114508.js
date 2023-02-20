import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { getPosts } from "../../services";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

function HomeNews({ posts }) {
  const { t } = useTranslation();
  console.log(posts);
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
                <Link href="/news/blog/1">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news1.webp" />
                    </div>
                    <h2>{t("news.news1")}</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/news/blog/2">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news2.png" />
                    </div>
                    <h2>{t("news.news2")}</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/news/blog/3">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news3.jpg" />
                    </div>
                    <h2>{t("newsPage.news3")}</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/news/blog/4">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news4.png" />
                    </div>
                    <h2>{t("newsPage.news4")}</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/news/blog/5">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news5.jpg" />
                    </div>
                    <h2>{t("newsPage.news5")}</h2>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mycol">
                <Link href="/news/blog/6">
                  <div className="wrapper_slider">
                    <div className="image_parent">
                      <div className="hover_effect">
                        <p>{t("directions.more")}</p>
                      </div>
                      <img src="images/news/news6.jpg" />
                    </div>
                    <h2>{t("newsPage.news6")}</h2>
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
