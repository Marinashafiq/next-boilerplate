import App from "next/app";
import Navbar from "../components/navbar";
import { appWithTranslation } from "../i18n";
import "../styles/globals.scss";
import Theme from "../theme";

const MyApp = ({ Component, pageProps }) => (
  <Theme>
     {/* <Navbar /> */}
    <Component {...pageProps} />
  </Theme>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
