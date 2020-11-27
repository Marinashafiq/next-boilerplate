import { Link, Router, withTranslation } from "../i18n";
import MainLayout from "../components/layouts/mainLayout";
import ButtonComponent from "../components/controls/button";

const Homepage = ({ t }) => (
  <>
    <main className="d-flex justify-content-center align-items-center py-5">
      <div className="text-center">
        <img className="welcome_image" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/45/1478516949-testify.gif"/>
        <h1 className="my-5">{t("welcomeContent")}</h1>
        <ButtonComponent
          content={t("login.loginTitle")}
          handleClick={() => Router.push("/auth/login")}
        />
      </div>
    </main>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["locale"],
});

Homepage.Layout = MainLayout;

export default withTranslation("locale")(Homepage);
