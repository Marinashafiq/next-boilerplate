import { withTranslation } from "next-i18next";
import ButtonComponent from "../../controls/button";
import LanguageSwitcher from "../../languageSwitcher";

function LoginForm ({t}) {
  return (
    <div className="w-75 mx-auto">
      <div className="d-flex justify-content-between align-items-center my-5">
      <h3 className="bold_font mb-0">{t('login.loginTitle')}</h3>
      <LanguageSwitcher color="text-dark"/>
      </div>
      <div className="form-group">
        <label>{t('controls.userName')}</label>
        <input type="text" className="form-control" placeholder={t('controls.userName')} />
      </div>
      <div className="form-group">
        <label>{t('controls.password')}</label>
        <input type="password" className="form-control" placeholder={t('controls.password')} />
      </div>
      <div className="d-flex justify-content-end">
        <ButtonComponent content={t('login.loginTitle')} />
      </div>
    </div>
  );
};

export default withTranslation("locale")(LoginForm);
