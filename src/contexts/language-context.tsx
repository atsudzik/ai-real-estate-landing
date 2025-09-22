"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  LanguageCode,
  TranslationContent,
  languageOptions,
  translations,
} from "@/lib/translations";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  translations: TranslationContent;
  options: typeof languageOptions;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const DEFAULT_LANGUAGE: LanguageCode = "en";

const isSupportedLanguage = (value: string | null): value is LanguageCode =>
  value !== null && value in translations;

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const paramLang = searchParams.get("lang");
    const storedLang = window.localStorage.getItem("preferred-language");
    const browserLang = navigator.language?.slice(0, 2);

    let initial: LanguageCode = DEFAULT_LANGUAGE;

    if (isSupportedLanguage(paramLang)) {
      initial = paramLang;
    } else if (isSupportedLanguage(storedLang)) {
      initial = storedLang;
    } else if (isSupportedLanguage(browserLang)) {
      initial = browserLang;
    }

    setLanguageState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-language", language);
    }
  }, [language]);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", code);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const content = translations[language] ?? translations[DEFAULT_LANGUAGE];
    return {
      language,
      setLanguage,
      translations: content,
      options: languageOptions,
    };
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
