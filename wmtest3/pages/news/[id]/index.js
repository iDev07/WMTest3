import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/router";
import { EachBlog } from "./[blog]";
function News({ moreInfo }) {
  const router = useRouter();
  const { id } = router.query;
  moreInfo = "Uzbekistan";
  console.log(moreInfo);
  return (
    <>
      <Head>
        <title>Export</title>
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
      </div>
      <div className="main_news">
        <div className="wrapper">
          <div className="mycol">
            <Link href="/news/[id]/[blog]" as={`/news/${id}/1`}>
              <div className="top_img">
                <img src="../images/news/news1.png" />
              </div>
              <h2></h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
// How to send props around components in REact js?
