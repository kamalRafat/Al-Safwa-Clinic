import React, { useEffect } from "react";
import { translations } from "../constants/translations";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({ children }) => {
  const language = "ar";

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  const t = translations[language];

  const value = React.useMemo(
    () => ({
      language,
      t,
    }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
