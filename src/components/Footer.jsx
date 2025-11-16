import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-gray-900 text-white p-3 text-center text-sm mt-10">
      {t("footerText")}
    </footer>
  );
}
