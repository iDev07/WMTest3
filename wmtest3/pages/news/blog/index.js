import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
function News(props) {
  return (
    <>
      <Head>
        <title>All News</title>
      </Head>
      <div className="News">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  <span>Новости</span>
                  <p>от World Miral Group</p>
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
        <div className="main_news p-5 light_dark">
          <div className="containerdev">
            <div className="wrapper grid-3">
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.webp" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.png" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.png" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.png" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.png" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
              <div className="mycol">
                <Link href="/news/">
                  <div className="top_img">
                    <img src="../images/news/news1.png" />
                  </div>
                  <h2>
                    Обсуждены вопросы развития и перспективы мебельной отрасли
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
// How to send props around components in REact js?
