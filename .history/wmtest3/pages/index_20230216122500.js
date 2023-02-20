import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Heading } from "../components/Heading";
import { useTranslation } from "react-i18next";
import Introduction from "../components/Home/Introduction";
import Advantages from "../components/Home/Advantages";
import Directions from "../components/Home/Directions";
import HomeNews from "../components/Home/HomeNews";
import Partners from "../components/Home/Partners";
import Particles from "../components/Particles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getPosts } from "../services";
export default function Home({ posts }) {
  const { t } = useTranslation();
  console.log(posts);
  return (
    <>
      <Head>
        <title>{t("aboutPage.intro")}</title>
        <meta name="description" content="Created by iDev07" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="new_logo.svg" />
      </Head>
      <main className="main">
        <Particles />
        <Introduction />

        <Heading
          name={t("whywe.intro")}
          name_page={"Присоединяйтесь к нам"}
          link={"/"}
          number={"01"}
        />
        <Advantages />
        <Heading
          name={t("directions.intro")}
          name_page={"посмотреть всё"}
          link={"/produce"}
          number={"02"}
        />
        <Directions />
        <Heading
          name={t("news.intro")}
          name_page={"посмотреть всё"}
          link={"/news/blog"}
          number={"03"}
        />

        {/* <HomeNews /> */}
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
                {posts.map(
                  (posts = (
                    <SwiperSlide>
                      <div className="mycol">
                        <Link href={posts.slug}>
                          <div className="wrapper_slider">
                            <div className="image_parent">
                              <div className="hover_effect">
                                <p>{t("directions.more")}</p>
                              </div>
                              <img src={posts.image_news} />
                            </div>
                            {/* <h2>{t("news.news1")}</h2> */}
                            <h2>{posts.heading_uz}</h2>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))
                )}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>

        <Heading
          name={t("partners.intro")}
          name_page={"посмотреть всё"}
          link={"/export"}
          number={"04"}
        />
        <Partners />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
