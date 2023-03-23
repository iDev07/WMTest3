import Link from "next/link";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { homeMainTexts } from "../../services";
import "animate.css";
function Introduction({ mainTexts }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className="Introduction">
      <div className="wrapper">
        {/* <div className="back_video">
          <video src="main_back.mp4" autoPlay loop muted />
        </div> */}
        <div className="content">
          <div className="main containerdev">
            <h1 className="heading animate__animated animate__zoomIn">
              <span>{t("homeMain.shortWord")}</span>
              {i18n.language === "uz"
                ? mainTexts[0].homedescription_uz
                : i18n.language === "ru"
                ? mainTexts[0].homedescription_ru
                : mainTexts[0].homedescription_en}
              {t("homeMain.mainText")}
            </h1>
            <p className="short_about animate__animated animate__zoomIn">
              {i18n.language === "uz"
                ? mainTexts[0].homemaintitle_uz
                : i18n.language === "ru"
                ? mainTexts[0].homemaintitle_ru
                : mainTexts[0].homemaintitle_en}
              {t("homeMain.mainDes1")}
            </p>
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
// export async function getStaticProps() {
//   const mainText = (await homeMainTexts()) || [];
//   return {
//     props: { mainText },
//   };
// }
