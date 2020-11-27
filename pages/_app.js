import App from "next/app";
import { appWithTranslation } from "../i18n";
import Theme from "../theme";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || <></>;
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
