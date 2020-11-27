import Link from "next/link";
import { useRouter } from "next/router";
import { withTranslation } from "../../../i18n";
import styles from "./auth.module.scss";

const Auth = ({ t }) => {
  const router = useRouter();
  const lang = router.asPath.split("/")[1];
  return (
    <div
      className={`p-md-5 p-3 d-flex flex-column justify-content-between ${styles.auth_container}`}
    >
      <div className={`${styles.header} d-flex`}>
        <Link href={`/${lang}/`}>
          <h1 className={`${styles.logo_title} text-white`}>
            Next.js Boilerplate
          </h1>
        </Link>
      </div>
      <div className={styles.main}>
        <h3 className=" text-white bold_font">{t("hello")}</h3>
      </div>
    </div>
  );
};

export default withTranslation("locale")(Auth);
