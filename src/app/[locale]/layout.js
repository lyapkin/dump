import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from "@/styles/layout.module.css";
import CartProvider from "@/providers/CartProvider";
import BreadCrumbsProvider from "@/providers/BreadCrumbsProvider";
import initTranslations from "../../locales/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
import i18nConfig from "../../../i18nConfig";
import Script from "next/script";
import CategoriesProvider from "@/providers/CategoriesProvider";
import { Suspense } from "react";
import YandexMetrika from "@/components/Yandex/YandexMetrika";
import ConsultationForm from "@/components/Form/ConsultationForm";
import LoadScriptsBeforeInteractive from "@/components/LoadScriptsBeforeInteractive/LoadScriptsBeforeInteractive";
import MapSection from "@/components/Map/MapSection";
import { permanentRedirect } from "next/navigation";
import UserLeaveCaptureForm from "@/components/Form/UserLeaveCaptureForm";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    metadataBase: new URL(process.env.BACK_URL + "/"),
  };
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "map",
    "breadcrumbs",
    "home",
    "form",
    "common",
    "about_section",
    "partners",
    "catalog",
    "cart",
    "contacts",
    "blog",
    "sort",
    "not_found",
  ]);

  const categories = await getCategories(locale);

  return (
    <html lang={locale}>
      <body className={styles["root-class"]}>
        <LoadScriptsBeforeInteractive scripts={[]} />

        <CategoriesProvider categories={categories}>
          <BreadCrumbsProvider>
            <CartProvider>
              <TranslationsProvider
                resources={resources}
                namespaces={["footer", "breadcrumbs", "home", "form", "common"]}
                locale={locale}
              >
                <Header />

                {children}

                <section className={styles["form-section"]}>
                  <div className="container">
                    <ConsultationForm locale={locale} section={true} />
                  </div>
                </section>
                <MapSection locale={locale} />
                <Footer locale={locale} />
                <UserLeaveCaptureForm />
              </TranslationsProvider>
            </CartProvider>
          </BreadCrumbsProvider>
        </CategoriesProvider>
      </body>
    </html>
  );
}

const getCategories = async (locale) => {
  if (!i18nConfig.locales.includes(locale)) {
    permanentRedirect("/", "replace");
  }
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/catalog/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};
