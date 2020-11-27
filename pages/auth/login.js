import Auth from "../../components/auth/authContainer";
import { withTranslation } from "../../i18n";
import LoginForm from "../../components/auth/login"
import NoLayout from "../../components/layouts/noLayout";
function Login({ t }) {
  return (
    <div className="row mx-0">
      <div className="col-md-6 px-0">
        {<Auth />}
      </div>
      <div className="col-md-6 d-flex align-items-center">
        {<LoginForm />}
      </div>
    </div>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ["locale"],
});

Login.Layout = NoLayout

export default withTranslation("locale")(Login);
