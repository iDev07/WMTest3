import React, { useState } from "react";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import { LineHeading } from "../components/LineHeading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import img1 from "../../../assets/About/user.webp";
// import { useTranslation } from "react-i18next";
import { Member } from "../utils/helpers";
function TeamMembers() {
  //   const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  return (
    <div className="TeamBack">
      <Modal
        title=""
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        // cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setVisible(false)}
        width={600}
      ></Modal>
      <div className="main_back wrapper">
        <div className="containerdev">
          <div className="inner_wrap">
            <div className="with_anime">
              <h1 className="heading">
                УСПЕХ ЗАВИСИТ ОТ ПРОФЕСИИОНАЛЬНОЙ <span>КОМАНДЫ</span>
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
      <LineHeading name_section={"наши СОТРУДНИКИ"} />
      <div className="main_content">
        <div className="containerdev">
          <div className="members">
            <Member
              fio={"FIO"}
              position={"Postion"}
              img="images/Vector.png"
              about={"About"}
            />
            <Member
              fio={"FIO"}
              position={"Postion"}
              img="images/Vector.png"
              about={"About"}
            />
            <Member
              fio={"FIO"}
              position={"Postion"}
              img="images/Vector.png"
              about={"About"}
            />
            <Member
              fio={"FIO"}
              position={"Postion"}
              img="images/Vector.png"
              about={"About"}
            />
            <Member
              fio={"FIO"}
              position={"Postion"}
              img="images/Vector.png"
              about={"About"}
            />
            {/* <Member
              fio={t("aboutPage.teamMember1")}
              position={t("aboutPage.memberPosition1")}
              img={img1}
              about={t("aboutPage.memberAbout1")}
            />
            <Member
              fio={t("aboutPage.teamMember2")}
              position={t("aboutPage.memberPosition2")}
              img={img1}
              about={t("aboutPage.memberAbout2")}
            />
            <Member
              fio={t("aboutPage.teamMember3")}
              position={t("aboutPage.memberPosition3")}
              img={img1}
              about={t("aboutPage.memberAbout3")}
            />
            <Member
              fio={t("aboutPage.teamMember4")}
              position={t("aboutPage.memberPosition4")}
              img={img1}
              about={t("aboutPage.memberAbout4")}
            />
            <Member
              fio={t("aboutPage.teamMember5")}
              position={t("aboutPage.memberPosition5")}
              img={img1}
              about={t("aboutPage.memberAbout5")}
            />
            <Member
              fio={t("aboutPage.teamMember6")}
              position={t("aboutPage.memberPosition6")}
              img={img1}
              about={t("aboutPage.memberAbout6")}
            />
            <Member
              fio={t("aboutPage.teamMember7")}
              position={t("aboutPage.memberPosition7")}
              img={img1}
              about={t("aboutPage.memberAbout7")}
            />
            <Member
              fio={t("aboutPage.teamMember8")}
              position={t("aboutPage.memberPosition8")}
              img={img1}
              about={t("aboutPage.memberAbout8")}
            />
            <Member
              fio={t("aboutPage.teamMember9")}
              position={t("aboutPage.memberPosition9")}
              img={img1}
              about={t("aboutPage.memberAbout9")}
            />
            <Member
              fio={t("aboutPage.teamMember10")}
              position={t("aboutPage.memberPosition10")}
              img={img1}
              about={t("aboutPage.memberAbout10")}
            />
            <Member
              fio={t("aboutPage.teamMember11")}
              position={t("aboutPage.memberPosition11")}
              img={img1}
              about={t("aboutPage.memberAbout11")}
            />
            <Member
              fio={t("aboutPage.teamMember12")}
              position={t("aboutPage.memberPosition12")}
              img={img1}
              about={t("aboutPage.memberAbout12")}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(TeamMembers), { ssr: false });
