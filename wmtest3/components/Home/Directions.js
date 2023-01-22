import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Directions() {
  const { t } = useTranslation();
  return (
    <div className="Directions">
      <div className="wrapper">
        <div className="myrow">
          <div className="mycol">
            <Link href="/consalting">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>{t("directions.type1")}</h1>
                <p className="border_g">{t("directions.more")}</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/export">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>{t("directions.type2")}</h1>
                <p className="border_g">{t("directions.more")}</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/produce">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>{t("directions.type3")}</h1>
                <p className="border_g">{t("directions.more")}</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/all4umarket">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>{t("directions.type4")}</h1>
                <p className="border_g">{t("directions.more")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
