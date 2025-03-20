import i18nConfig from "../../i18nConfig";

export default (location, lang, prefixPathSegment) => {
  const locale = lang && lang !== i18nConfig.defaultLocale ? `/${lang}` : "";
  return `${locale}${prefixPathSegment}${location}`;
};
