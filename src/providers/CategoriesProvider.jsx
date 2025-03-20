"use client";
import React, { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

const CategoriesProvider = ({ children, categories }) => {
  const [name, setName] = useState({});

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
