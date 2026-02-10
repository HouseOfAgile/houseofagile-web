export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const supportedLangs: Lang[] = ['en', 'de', 'fr'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  if (lang === defaultLang) return `/${path}`;
  return `/${lang}/${path}`;
}

export function getAlternateUrls(slug: string, type: 'case-studies' | 'services'): Record<Lang, string> {
  return {
    en: `https://houseofagile.com/${type}/${slug}`,
    de: `https://houseofagile.com/de/${type}/${slug}`,
    fr: `https://houseofagile.com/fr/${type}/${slug}`,
  };
}
