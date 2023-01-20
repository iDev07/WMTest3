import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import BackToTop from "../components/BackToTop";
import LoadingScreen from "../components/loadingScreen";
function Layout({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 500);
  }, []);
  return (
    <div>
      {/* {!loading ? ( */}
      <React.Fragment>
        <Header />
        <MobileHeader />
        <BackToTop />
        {children}
        <Footer />
      </React.Fragment>
      {/* ) : ( */}
      {/* <LoadingScreen /> */}
      {/* )} */}
    </div>
  );
}
export default Layout;
