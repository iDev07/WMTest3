import React from "react";
import { getPosts } from "../../../services";
import { useTranslation } from "react-i18next";
import Head from "next/head";
export default function Slug({ post }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {i18n.language === "uz"
            ? post.heading_uz
            : i18n.language === "ru"
            ? post.heading_ru
            : post.heading_en}
        </title>
      </Head>
    </>
  );
}
