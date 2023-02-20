import React, { useState } from "react";
import { Modal } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const Member = ({ img, about, fio, position }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className="mycol_member">
      <div className="about">
        <div className="for_img_member">
          <img src={img} alt="directors" />
        </div>
        <h3>{fio}</h3>
        <p>{position}</p>
        <button className="border_g" onClick={() => setVisible(true)}>
          {t("aboutPage.teamBtn")}
        </button>
        <Modal
          title=""
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}
          onCancel={() => setVisible(false)}
          width={800}
          className="workers_modal"
        >
          <div className="about_worker">
            <div className="wrapper">
              <div className="left_about">
                <div className="for_img_worker">
                  <img src="images/Vector.png" />
                </div>
                <h1>{fio}</h1>
                <h4>{position}</h4>
              </div>
              <div className="right_about">
                <p>{about}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export const HomeNewsPiece = ({ post }) => {
  const { t } = useTranslation();
  return (
    <SwiperSlide>
      <div className="mycol">
        <Link href={post.slug_news}>
          <div className="wrapper_slider">
            <div className="image_parent">
              <div className="hover_effect">
                <p>{t("directions.more")}</p>
              </div>
              <img src={post.image_news.url} />
            </div>
            <h2>{post.heading_uz}</h2>
          </div>
        </Link>
      </div>
    </SwiperSlide>
  );
};
