import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
function MainSingle() {
  const { t } = useTranslation();
  return (
    <div className="MainSingle">
      {/* <div className="top">
        <Link href="/news">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon"
          ></FontAwesomeIcon>
        </Link>
        <h6>{t("newsPage.companyNews")}</h6>
      </div> */}
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h2>{t("news.news1")}</h2>
            <img src="../../images/news/news1.webp" alt="img" />
            <p>{t("news.fullNews1")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSingle;
