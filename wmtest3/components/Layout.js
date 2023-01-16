import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
