import "../styles/globals.scss";

import "antd/dist/antd.min.css";

import Header from "../components/organisms/header/Header";
import Footer from "../components/organisms/footer/Footer";
import { Provider } from "react-redux";
import PageWrapper from "../components/organisms/page-wrapper";
import store from "../services/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Footer />
    </Provider>
  );
}

export default MyApp;
