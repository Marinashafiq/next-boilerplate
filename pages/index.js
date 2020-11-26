import { i18n, Link, withTranslation } from "../i18n";

const Homepage = ({ t }) => (
  <>
    <main>
      <div>
        <h1>{t("hello")}</h1>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
        >
          {t("change-locale")}
        </button>
        <Link href="/second-page">
          <button type="button">{t("hello")}</button>
        </Link>
      </div>
    </main>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired : ["locale"]
});

export default withTranslation("locale")(Homepage);
