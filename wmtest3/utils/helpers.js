import React, { useState } from "react";
import "./helper.scss";
import { Modal } from "antd";
// import { useTranslation } from "react-i18next";
export const Member = ({ img, about, fio, position }) => {
  const [visible, setVisible] = useState(false);
//   const { t } = useTranslation();
  return (
    <div className="mycol_member">
      <img src={img} alt="directors" />
      <div className="about">
        <h3>{fio}</h3>
        <p>{position}</p>
        <button onClick={() => setVisible(true)}>
          {t("aboutPage.teamBtn")}
        </button>
        <Modal
          title=""
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          // cancelButtonProps={{ style: { display: "none" } }}
          onCancel={() => setVisible(false)}
          width={600}
        >
          <div className="this_director">
            <div className="this_director_img">
              <img src={img} alt="director" />
              <h5>{position}</h5>
              <h1>{fio}</h1>
              <p>{about}</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
