import  { useRouter } from "next/router";
import {  useTranslation, withTranslation } from "../i18n";
import MainLayout from "../components/layouts/mainLayout";
import ButtonComponent from "../components/controls/button";
import { useWarnIfUnsavedChanges } from "../components/unsavedChanges";

const Homepage = ({ t }) => {
  const router = useRouter();
  useWarnIfUnsavedChanges(true)
  const {
    i18n: { language },
  } = useTranslation(["locale"]);

  return (
    <>
      <main className="d-flex justify-content-center align-items-center py-5">
        <div className="text-center">
          <img
            className="image"
            src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/45/1478516949-testify.gif"
          />
          <h1 className="my-5">{t("welcomeContent")}</h1>
          <ButtonComponent
            content={t("login.loginTitle")}
            handleClick={() => router.push(`/${language}/auth/login`)}
          />
          <ButtonComponent
            content={t("products")}
            handleClick={() => router.push(`/${language}/products`)}
            classes="mx-4"
          />
        </div>
      </main>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["locale"],
});

Homepage.Layout = MainLayout;

export default withTranslation("locale")(Homepage);
