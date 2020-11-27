import { withTranslation } from "../../../i18n";
import styles from "./auth.module.scss";

const Auth = ({t}) => {
  return (
    <div
      className={`p-md-5 p-3 d-flex flex-column justify-content-between ${styles.auth_container}`}
    >
      <div className={`${styles.header} d-flex`}>
        <h1 className={`${styles.logo_title} text-white`}>
          Next.js Boilerplate
        </h1>
      </div>
      <div className={styles.main}>
  <h3 className=" text-white bold_font">{t("hello")}</h3>
      </div>
    </div>
  );
};

export default  withTranslation("locale")(Auth);
