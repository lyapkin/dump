"use client";
import { useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { methodsToLoad } from "./constant";
import { useTranslation } from "react-i18next";
import NoSearchResult from "./NoSearchResult";
import Spinner from "../Spinner/Spinner";
import PagePagination from "../pagination/PagePagination";

import styles from "@/styles/catalog.module.css";
import ProductCard from "./ProductCard";

const Products = ({ pathSegment }) => {
  const locale = useParams().locale;

  const { t } = useTranslation();

  const [addLoading, setAddLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const page = parseInt(searchParams.get("page")) || 1;
  const [isNextPage, setIsNextPage] = useState(false);
  const [pageCount, setPageCount] = useState(undefined);

  const [products, setProducts] = useState([]);

  const [methodToLoadProducts, setMethodToLoadProducts] = useState(
    methodsToLoad.UPDATE
  );

  const changePage = async (method, page) => {
    setAddLoading(true);
    setMethodToLoadProducts(method);
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page);

    if (method === methodsToLoad.UPDATE) {
      router.push(`${path}?${urlSearchParams.toString()}`, { scroll: true });
    } else if (method === methodsToLoad.APPEND) {
      router.replace(`${path}?${urlSearchParams.toString()}`, {
        scroll: false,
      });
    } else {
      console.log("method is undefined", method);
    }
  };

  const getProducts = async (abortController) => {
    const path = `/${locale}/api/catalog${pathSegment}products/?`;
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.delete("utm_source");
    urlSearchParams.delete("utm_campaign");
    const url = new URL(
      process.env.BACK_URL + path + urlSearchParams.toString()
    );

    const response = await fetch(url, { signal: abortController.signal });

    if (!response.ok) {
      throw new Error(response.status + " запрос товаров не удался");
    }

    const data = await response.json();

    if (data.next) {
      setIsNextPage(true);
    } else {
      setIsNextPage(false);
    }

    setPageCount(data["page_count"]);

    setProducts((prev) => {
      if (methodToLoadProducts === methodsToLoad.UPDATE) {
        return data.results;
      } else if (methodToLoadProducts == methodsToLoad.APPEND) {
        return prev.concat(data.results);
      }
    });
    setAddLoading(false);
    setGetLoading(false);
    setMethodToLoadProducts(methodsToLoad.UPDATE);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page == 1 || !page || (page > 1 && products.length === 0)) {
      setGetLoading(true);
    }

    const abortController = new AbortController();

    getProducts(abortController);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  return (
    <>
      <div className={styles["products"]}>
        {getLoading ? (
          <Spinner />
        ) : products.length <= 0 ? (
          <NoSearchResult />
        ) : (
          products.map((p) => <ProductCard p={p} />)
        )}
        {products.length > 0 && !getLoading && (
          <div className={styles["catalog__pagination"]}>
            {isNextPage && (
              <button
                className={styles["catalog__show-more"]}
                onClick={() => changePage(methodsToLoad.APPEND, page + 1)}
                disabled={addLoading}
              >
                {addLoading ? <Spinner size={30} /> : t("catalog:show_more")}
              </button>
            )}
            <PagePagination
              page={page}
              pageCount={pageCount}
              handleClick={(page) => changePage(methodsToLoad.UPDATE, page)}
              disabled={addLoading}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
