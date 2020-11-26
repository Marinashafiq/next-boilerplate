import { withTranslation } from "../../i18n";

function Login({ t }) {
  return <div>{t("hello")}</div>;
}

Login.getInitialProps = async () => ({
  namespacesRequired: ["locale"],
});

export default withTranslation("locale")(Login);
