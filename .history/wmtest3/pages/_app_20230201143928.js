import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/About.scss";
import "antd/dist/reset.css";
import "../styles/helpers.scss";
import "../styles/JoinUs.scss";
import "../styles/all4umarket.scss";
import "../styles/produce.scss";
import "../styles/advertising.scss";
import "../styles/export.scss";
import "../styles/news.scss";
import "../styles/MainSingle.scss";
import "../styles/itservices.scss";
import "../styles/consalting.scss";
import "../styles/contacts.scss";
import "../styles/bootstrap.min.css";
import "../styles/MobileNav.scss";
import "../styles/Footer.scss";
import "../styles/loading.scss";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import MainLoader from "../components/MainLoader";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {/* <Loading /> */}
      {loading === true ? (
        <MainLoader />
      ) : (
        <Layout>
          <NextNProgress /> <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
