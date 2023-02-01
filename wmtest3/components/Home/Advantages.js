import React from "react";
import { useTranslation } from "react-i18next";
import "animate.css";
function Advantages() {
  const { t } = useTranslation();
  return (
    <div className="Advantages">
      <div className="containerdev">
        <div className="wrapper">
          <div className="mycol">
            <div className="myrow">
              <img src="images/advan1.png" />
              <h3>{t("whywe.text1")}</h3>
              <p>{t("whywe.desc1")}</p>
            </div>
          </div>

          <div className="mycol">
            <div className="myrow">
              <img src="images/advan3.png" />
              <h3>{t("whywe.text3")}</h3>
              <p>{t("whywe.desc3")}</p>
            </div>
          </div>
          <div className="mycol">
            <div className="myrow">
              <img src="images/advan2.png" />
              <h3>{t("whywe.text2")}</h3>
              <p>{t("whywe.desc2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
