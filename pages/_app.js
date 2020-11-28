import Head from "next/head";
import App from "next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "../i18n";
import { Provider } from "react-redux";
import store from "../store";
import Theme from "../theme";
import { Loader } from "../components/loader";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout;
  let auth = true;
  const router = useRouter();
  const lang = router.asPath.split("/")[1];
  if (router.pathname.split("/")[1] === "products" && !auth) {
    router.push(`${lang}/auth/login`);
  }
  return (
    <Provider store={store}>
      <Theme>
        <Layout>
          {store.getState().isLoading ? (
            <Loader />
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </Theme>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
