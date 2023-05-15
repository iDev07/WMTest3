import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("contactPage.intro")}</title>
      </Head>
      <div className="Contacts">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  {t("contactPage.intro")}
                  <p>{t("contactPage.desc")}</p>
                  <p className="contacs_p">
                    <span>
                      <a href="tel: +998 71 230 38 83">+998 71 230 38 83</a>
                    </span>
                    |
                    <span>
                      <a href="mailto: worldmiral@mail.ru">
                        worldmiral@mail.ru
                      </a>
                    </span>
                    |
                    <span>
                      {t("contactPage.adminstration")}
                      <a
                        href="tel: +998 99 350 00 00 "
                        style={{
                          marginLeft: "8px",
                        }}
                      >
                        +998 99 350 00 00
                      </a>
                    </span>
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
