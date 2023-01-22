import Link from "next/link";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="Introduction">
      <div className="wrapper">
        <div className="back_video">
          <video src="main_back.mp4" autoPlay loop muted />
        </div>
        <div className="content">
          <div className="main containerdev">
            <h1 className="heading">
              <span>{t("homeMain.shortWord")}</span> {t("homeMain.mainText")}
            </h1>
            <p className="short_about">{t("homeMain.mainDes1")}</p>
            <div className="border_g">
              <Link href="/about-us">{t("homeMain.moreRead")}</Link>
            </div>
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
  );
}

export default Introduction;
