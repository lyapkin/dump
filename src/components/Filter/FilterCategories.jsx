import React, { useContext } from "react";
import FilterSection from "./FilterSection";
import CategoryList from "./CategoryList";
import CategoryProperties from "./CategoryProperties";
import { useTranslation } from "react-i18next";
import { CategoriesContext } from "@/providers/CategoriesProvider";
import { useSelectedLayoutSegments } from "next/navigation";
import PresenceFilter from "./PresenceFilter";

const FilterCategories = () => {
  const { t } = useTranslation();
  const categories = useContext(CategoriesContext);
  const currentCatSlug = useSelectedLayoutSegments()[1];

  const currentCat = categories
    .reduce((result, c) => [...result, ...c.subcategories], [])
    .find((c) => c.slug === currentCatSlug);

  return (
    <>
      <FilterSection name={t("catalog:categories")}>
        <CategoryList categories={categories} currentCat={currentCatSlug} />
      </FilterSection>
      <FilterSection name={t("catalog:presence.title")}>
        <PresenceFilter />
      </FilterSection>
      {currentCat?.filters.map((filter) => (
        <FilterSection key={filter.id} name={filter.name}>
          <CategoryProperties filter={filter} />
        </FilterSection>
      ))}
    </>
  );
};

export default FilterCategories;
