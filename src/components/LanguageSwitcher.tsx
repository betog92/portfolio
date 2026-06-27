import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const current = i18n.resolvedLanguage === "es" ? "es" : "en";
  const next = current === "es" ? "en" : "es";

  const toggleLanguage = () => {
    i18n.changeLanguage(next);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0 me-lg-2"
      aria-label={t("language.label")}
      title={next === "es" ? t("language.spanish") : t("language.english")}
    >
      {t(`language.${current}`)} / {t(`language.${next}`)}
    </button>
  );
};

export default LanguageSwitcher;
