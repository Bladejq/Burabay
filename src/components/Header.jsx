import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openLang, setOpenLang] = React.useState(false);

  const languages = [
    { code: "ru", label: "Русский", flag: "/img/flags/ru.png" },
    { code: "en", label: "English", flag: "/img/flags/en.png" },
    { code: "kz", label: "Қазақша", flag: "/img/flags/kz.png" },
    { code: "ch", label: "中文", flag: "/img/flags/ch.png" }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLang(false);
    setOpenMenu(false);
  };

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex items-center justify-between relative z-999">
      <h1 className="text-xl font-bold">{t("headerTitle")}</h1>

      {/* Десктопное меню */}
      <nav className="hidden md:flex gap-6 items-center text-lg">
        <a href="/" className="hover:text-blue-300">{t("home")}</a>

        {/* Языковой селектор */}
        <div className="relative">
          <button
            className="ml-4 border border-white rounded px-2 py-1 flex items-center gap-1"
            onClick={() => setOpenLang(!openLang)}
          >
            <img
              src={languages.find(l => l.code === i18n.language)?.flag}
              alt={i18n.language}
              className="w-5 h-5 rounded"
            />
            {i18n.language.toUpperCase()}
            <span>▼</span>
          </button>

          {openLang && (
            <div className="absolute right-0 mt-2 w-36 bg-gray-900 rounded shadow-lg z-10">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="w-full text-left px-3 py-1 hover:bg-gray-700 flex items-center gap-2"
                >
                  <img src={lang.flag} alt={lang.code} className="w-5 h-5 rounded" />
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Кнопка мобильного меню */}
      <button className="md:hidden focus:outline-none" onClick={() => setOpenMenu(!openMenu)}>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>

      {/* Мобильное меню */}
      {openMenu && (
        <div className="absolute top-16 right-4 bg-gray-900 text-white rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden">
          <a onClick={() => setOpenMenu(false)} href="/">{t("home")}</a>

          <div className="flex flex-col gap-2 mt-2">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="w-full text-left px-3 py-1 hover:bg-gray-700 flex items-center gap-2"
              >
                <img src={lang.flag} alt={lang.code} className="w-5 h-5 rounded" />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
