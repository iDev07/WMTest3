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
import { HomeNewsPiece } from "../utils/helpers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getPosts } from "../services";
import { homeMainTexts } from "../services";

export default function Home({ posts, mainTexts }) {
  const { t } = useTranslation();
  // console.log(posts);
  console.log(mainTexts);
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
        <Introduction mainTexts={mainTexts} />
        <Heading
          name={t("whywe.intro")}
          name_page={"Присоединяйтесь к нам"}
          link={"/about-us"}
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
                {posts.map((post, index) => (
                  <SwiperSlide>
                    <HomeNewsPiece key={index} post={post.node} />
                  </SwiperSlide>
                ))}
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
  const mainTexts = (await homeMainTexts()) || [];
  return {
    props: { posts, mainTexts },
  };
}
