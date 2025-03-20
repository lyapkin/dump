import { defaultLocale, locales } from "../../i18nConfig";

export default (pathname) => {
  return (
    locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    ) || defaultLocale
  );
};
