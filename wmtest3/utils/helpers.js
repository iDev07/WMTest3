import React, { useState } from "react";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";
export const Member = ({ img, about, fio, position }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
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
