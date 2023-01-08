import "../styles/globals.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/About.scss";
import "antd/dist/reset.css";
import "../styles/helpers.scss";
import "../styles/JoinUs.scss";
import "../styles/all4umarket.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
