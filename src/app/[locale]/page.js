import AboutSection from "@/components/AboutSection/AboutSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import { pages } from "../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";
import Hero from "@/components/Home/hero/Hero";
import Advantages from "@/components/Home/advantages/Advantages";
import CatalogSection from "@/components/Home/catalog/CatalogSection";
import ProjectsSection from "@/components/Home/projects/ProjectsSection";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("home", locale);

  const { HOME: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

export default async function Home({ params: { locale } }) {
  const data = await getStaticPageSEO("home", locale);

  return (
    <main>
      <Hero locale={locale} data={data} />
      <Advantages locale={locale} />
      <CatalogSection locale={locale} />
      <ProjectsSection locale={locale} />
      <DeliverySection locale={locale} />

      <ClientsSection locale={locale} />

      <AboutSection locale={locale} />
    </main>
  );
}
