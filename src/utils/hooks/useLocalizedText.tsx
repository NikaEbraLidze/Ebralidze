import { useLang } from "@/components/locales";

type LocalizedTextFunction = (key: string) => string;

export const useLocalizedText = (baseKey: string): LocalizedTextFunction => {
  const { t } = useLang();

  return (key: string): string => {
    const fullKey = key ? `${baseKey}.${key}` : baseKey;

    try {
      const keys = fullKey.split(".");
      let value: any = t;

      for (const k of keys) {
        value = value[k];
      }

      return typeof value === "string" ? value : fullKey;
    } catch {
      return fullKey;
    }
  };
};
