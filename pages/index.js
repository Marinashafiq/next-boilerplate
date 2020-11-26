import { Link, withTranslation } from "../i18n";
import Navbar from "../components/navbar";

const Homepage = ({ t }) => (
  <>
  <Navbar />
    <main className="d-flex justify-content-center align-items-center py-5">
      <div>
        <h1>{t("hello")}</h1>
        <Link href="/second-page">
          <button className="btn btn-primary mx-3" type="button">{t("hello")}</button>
        </Link>
      </div>
    </main>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired : ["locale"]
});

export default withTranslation("locale")(Homepage);
