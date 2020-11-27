import App from "next/app";
import { appWithTranslation } from "../i18n";
import Theme from "../theme";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || <></>;
  return (
    <Provider store={store}>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
