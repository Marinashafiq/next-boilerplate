import { withTranslation } from "next-i18next";
import { i18n } from "../../i18n";

const LanguageSwitcher = ({ color, t }) => {
  return (
    <button
      type="button"
      className={`btn ${color} ${
        i18n.language === "ar" ? "Nunito-Bold" : "Almarai-Bold"
      }`}
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
    >
      {t("language")}
    </button>
  );
};

export default withTranslation("locale")(LanguageSwitcher);
