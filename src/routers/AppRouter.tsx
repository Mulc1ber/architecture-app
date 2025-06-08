import type React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout";
import { PrivateRoute } from "../hoc";
import { AuthProvider } from "../context";

const Login = lazy(() =>
  import("../pages/Login").then((module) => ({ default: module.Login }))
);
const MainPage = lazy(() =>
  import("../pages/MainPage").then((module) => ({ default: module.MainPage }))
);
const NotFound = lazy(() =>
  import("../pages/NotFound").then((module) => ({ default: module.NotFound }))
);

const CategoriesRoutes = lazy(() =>
  import("./CategoriesRoutes").then((m) => ({ default: m.CategoriesRoutes }))
);

export const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/categories/*"
            element={
              <PrivateRoute>
                <CategoriesRoutes />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
