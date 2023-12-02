import "../styles/globals.scss";

import "antd/dist/antd.min.css";
import "leaflet/dist/leaflet.css";
import "react-phone-input-2/lib/style.css";

import Header from "../components/organisms/header/Header";
import Footer from "../components/organisms/footer/Footer";
import { Provider } from "react-redux";
import PageWrapper from "../components/organisms/page-wrapper";
import store from "../services/store";
import { BreadcrumbProvider } from "../utils/hooks/contexts/bredcrumb";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <PageWrapper>
        <BreadcrumbProvider>
          <Component {...pageProps} />
        </BreadcrumbProvider>
      </PageWrapper>
      <Footer />
    </Provider>
  );
}

export default MyApp;
