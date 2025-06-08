import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoriesLayout } from "../layout/CategoriesLayout";

const Categories = lazy(() =>
  import("../pages/Categories").then((module) => ({
    default: module.Categories,
  }))
);
const CardElement = lazy(() =>
  import("../pages/CardElement").then((module) => ({
    default: module.CardElement,
  }))
);

export const CategoriesRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<CategoriesLayout />}>
          <Route path=":name" element={<Categories />} />
          <Route path=":name/:id" element={<CardElement />} />
        </Route>
      </Routes>
    </>
  );
};
