import "../styles/globals.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/About.scss";
import "antd/dist/reset.css";
import "../styles/helpers.scss";
import "../styles/JoinUs.scss";
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
