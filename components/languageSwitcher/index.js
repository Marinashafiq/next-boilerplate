import { withTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { i18n } from "../../i18n";
import { setLanguage } from "../../store/lang/actions";

const LanguageSwitcher = ({ color, t }) => {
  const dispatch = useDispatch();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    dispatch(setLanguage(i18n.language === "en" ? "ar" : "en"));
  };

  return (
    <button
      type="button"
      className={`btn ${color} ${
        i18n.language === "ar" ? "Nunito-Bold" : "Almarai-Bold"
      }`}
      onClick={() => changeLang()}
    >
      {t("language")}
    </button>
  );
};

export default withTranslation("locale")(LanguageSwitcher);
