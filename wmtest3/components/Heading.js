import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export const Heading = ({ number, name, name_page, link }) => {
  const { t } = useTranslation();
  return (
    <div className="Heading_pages">
      <div className="wrapper">
        <div className="containerdev">
          <div className="number">
            <p>{number}</p>
          </div>
          <div className="content">
            <div className="name">
              <h1>{name}</h1>
            </div>
            <div className="border_g ml-auto">
              <Link href={link}>{t("test.test1")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// {/* {name_page} */}
