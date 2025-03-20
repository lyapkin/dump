"use client";
import React, { createContext, useState } from "react";

export const BreadCrumbsContext = createContext([]);

const BreadCrumbsProvider = ({ children }) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  return (
    <BreadCrumbsContext.Provider value={[breadCrumbs, setBreadCrumbs]}>
      {children}
    </BreadCrumbsContext.Provider>
  );
};

export default BreadCrumbsProvider;
