import React, { createContext, useContext, useState } from "react";
import en from "./en";
import ka from "./ka";

type Language = "en" | "ka";

const languages = {
  en,
  ka,
};

type LanguageContextType = {
  lang: Language;
  t: typeof en;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: languages[lang],
        setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return context;
};
