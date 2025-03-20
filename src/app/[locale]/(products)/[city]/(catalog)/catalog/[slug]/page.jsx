import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";
import { pages } from "../../../../../../../../settings";
import { permanentRedirect } from "next/navigation";
import { generateMetadataDynamic } from "@/utils/generateMetadataUtil";
import initTranslations from "@/locales/i18n";
import CategoryDescription from "@/components/catalog/CategoryDescription";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import styles from "@/styles/catalog.module.css";
import PassDynamicBreadcrumb from "@/components/Header/PassDynamicBreadcrumb";
import getRedirectUrl from "@/utils/getRedirectUrl";
import handleNotExistingPage from "@/utils/handleNotExistingPage";
import { NOCITY_PLACEHOLDER } from "@/config/cityConfig";

export const generateMetadata = async (
  { params: { locale, city, slug }, searchParams },
  parent
) => {
  const { CATALOG: pathSegment } = pages;

  const data = await getCategory(city, slug, locale);
  const meta = generateMetadataDynamic(
    parent,
    pathSegment,
    slug,
    locale,
    data.seo,
    city
  );

  meta.robots =
    Object.keys(searchParams).length > 0
      ? {
          index: false,
          follow: true,
        }
      : meta.robots;

  return meta;
};

const Category = async ({ params: { locale, city, slug } }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  const data = await getCategory(city, slug, locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("catalog:catalog"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/catalog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: data.name,
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/catalog/${slug}/`,
      },
    ],
  };

  return (
    <>
      <CatalogHeader header={data.name} />
      <main className={styles["catalog__products"]}>
        <Suspense fallback={<Spinner />}>
          <Products pathSegment={`/categories/${slug}/`} />
        </Suspense>
      </main>
      {data.content && <CategoryDescription description={data.content} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <PassDynamicBreadcrumb
        breadCrumbs={
          data.city
            ? [
                { segment: "", name: data.city.name },
                { segment: "catalog", name: t("catalog:catalog") },
                { segment: slug, name: data.name },
              ]
            : [
                { segment: "catalog", name: t("catalog:catalog") },
                { segment: slug, name: data.name },
              ]
        }
      />
    </>
  );
};

const getCategory = async (city, slug, locale) => {
  if (!slug) return;
  const url =
    city === NOCITY_PLACEHOLDER
      ? `${process.env.BACK_URL}/${locale}/api/catalog/categories/${slug}/`
      : `${process.env.BACK_URL}/${locale}/api/catalog/city/${city}/categories/${slug}/`;
  const response = await fetch(url, {
    next: { revalidate: 0 },
    redirect: "manual",
  });
  if (response.status === 301)
    permanentRedirect(
      getRedirectUrl(response.headers.get("Location"), locale, "/catalog")
    );
  if (response.status === 404) {
    handleNotExistingPage();
  }
  if (response.ok) return await response.json();
  throw new Error("problem with checking whether a category exists");
};

export default Category;
