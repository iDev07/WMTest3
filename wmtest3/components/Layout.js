import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import BackToTop from "../components/BackToTop";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <MobileHeader />
      <BackToTop />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
