import { NOCITY_PLACEHOLDER } from "@/config/cityConfig";
import i18nConfig from "../../i18nConfig";

export const getStaticPageSEO = async (page, locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/seo/meta/static/${page}/`,
    {
      next: { revalidate: 60 },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 404) {
    return { translated: false };
  }
  throw new Error("problem with getting metadata fro page: " + page);
};

export const getDynamicPageSEO = async (type, slug, locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/seo/meta/${type}/${slug}/`,
    {
      next: { revalidate: 60 },
    }
  );
  if (response.ok) {
    return await response.json();
  }
  if (response.status === 404) {
    return { translated: false };
  }
  throw new Error("problem with getting metadata fro page: " + page);
};

export const generateMetadataStatic = async (
  parent,
  pathSegment,
  locale,
  data
) => {
  const canonical = `${locale === "ru" ? "" : locale}${pathSegment}`;

  const languages = {
    "x-default": canonical,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = pathSegment;
    } else {
      languages[lang] = `${lang}${pathSegment}`;
    }
  });

  const meta = data.translated ? data.meta : {};

  const openGraph = await generateOpenGraph(parent, pathSegment, locale);

  return {
    ...meta,
    alternates: {
      canonical,
      languages,
    },
    openGraph,
  };
};

export const generateMetadataDynamic = async (
  parent,
  pathSegment,
  slug,
  locale,
  data,
  city
) => {
  const isCityPage = city && city !== NOCITY_PLACEHOLDER;

  const canonical = `${locale === "ru" ? "" : locale}${
    isCityPage ? "/" + city : ""
  }${pathSegment}${slug}/`;

  if (!data.translated)
    return {
      canonical,
    };

  const openGraph = await generateOpenGraph(parent, pathSegment + slug, locale);

  const languages = {
    "x-default": canonical,
  };

  if (isCityPage) {
    return {
      ...data.meta,
      alternates: {
        canonical,
        languages,
      },
      openGraph,
    };
  }

  const slugs = data.slug;

  for (let lang in slugs) {
    if (lang === locale) continue;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = `${pathSegment}${slugs[lang]}/`;
    } else {
      languages[lang] = `${lang}${pathSegment}${slugs[lang]}/`;
    }
  }

  return {
    ...data.meta,
    alternates: {
      canonical,
      languages,
    },
    openGraph,
  };
};

export const generateOpenGraph = async (parent, path, lang) => {
  const url = new URL(
    (lang === i18nConfig.defaultLocale ? "" : `/${lang}`) + path,
    process.env.SITE_URL
  );
  return {
    url,
    type: "website",
  };
};
