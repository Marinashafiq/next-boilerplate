import Head from "next/head";
import App from "next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "../i18n";
import { Provider } from "react-redux";
import store from "../store";
import Theme from "../theme";
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
    <>
      <Head>
        <link
          data-require="fontawesome@*"
          data-semver="4.5.0"
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css"
        />
      </Head>
      <Provider store={store}>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
