import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoriesLayout } from "../../layout";

const Categories = lazy(() =>
  import("../../pages/Categories/Categories").then((module) => ({
    default: module.Categories,
  }))
);
const CardElement = lazy(() =>
  import("../../pages/CardElement/CardElement").then((module) => ({
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
