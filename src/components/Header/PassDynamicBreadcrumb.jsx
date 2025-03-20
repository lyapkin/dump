"use client";
import { BreadCrumbsContext } from "@/providers/BreadCrumbsProvider";
import React, { useContext, useEffect } from "react";

const PassDynamicBreadcrumb = ({ breadCrumbs }) => {
  const [_, setBreadCrumbs] = useContext(BreadCrumbsContext);

  useEffect(() => {
    setBreadCrumbs(breadCrumbs);

    return () => {
      setBreadCrumbs([]);
    };
  }, []);

  return <></>;
};

export default PassDynamicBreadcrumb;
