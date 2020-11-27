import { i18n } from "../../i18n";

const LanguageSwitcher = ({ color }) => {
  return (
    <button
      type="button"
      className={`btn ${color} ${
        i18n.language === "ar" ? "Nunito-Bold" : "Almarai-Bold"
      }`}
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
    >
      {i18n.language === "en" ? "عربى" : "en"}
    </button>
  );
};

export default LanguageSwitcher;
