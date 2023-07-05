import React, { useState } from "react";
import Head from "next/head";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import { LineHeading } from "../components/LineHeading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { Member } from "../utils/helpers";
import "animate.css";
function TeamMembers() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
        <title>{t("aboutPage.teamIntro")}</title>
      </Head>
      <div className="TeamBack">
        <Modal
          title=""
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={600}
        ></Modal>
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading animate__animated animate__backInDown">
                  {t("aboutPage.teamIntro")}
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
        <LineHeading name_section={t("aboutPage.ourTeam")} />
        <div className="main_content">
          <div className="containerdev">
            <div className="members">
              {/* <Member
                fio={t("aboutPage.teamDirector")}
                position={t("aboutPage.teamDirectorPos")}
                img="images/Vector.png"
                about={t("aboutPage.teamDirectorAbout")}
              /> */}
              {/* <Member
                fio={t("aboutPage.teamMember1")}
                position={t("aboutPage.memberPosition1")}
                img="images/Vector.png"
                about={t("aboutPage.memberAbout1")}
              /> */}
              <Member
                fio={t("aboutPage.teamMember2")}
                position={t("aboutPage.memberPosition2")}
                img="images/Vector.png"
                about={t("aboutPage.memberAbout2")}
              />
              <Member
                fio={t("aboutPage.teamMember3")}
                position={t("aboutPage.memberPosition3")}
                img="images/Vector.png"
                about={t("aboutPage.memberAbout3")}
              />
              <Member
                fio={t("aboutPage.teamMember4")}
                position={t("aboutPage.memberPosition4")}
                img="images/Vector.png"
                about={t("aboutPage.memberAbout4")}
              />

              <Member
                fio={t("aboutPage.teamMember5")}
                position={t("aboutPage.memberPosition5")}
                img="images/Vector.png"
                about={t("aboutPage.memberAbout5")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(TeamMembers), { ssr: false });
