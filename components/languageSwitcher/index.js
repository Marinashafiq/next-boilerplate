import { i18n } from "../../i18n";

const LanguageSwitcher = () => {
  return (
    <button
      type="button"
      className="btn text-white"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
    >
      {i18n.language === "en" ? "عربى" : "en"}
    </button>
  );
};

export default LanguageSwitcher;
