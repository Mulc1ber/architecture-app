import type React from "react";
import { Outlet } from "react-router-dom";

export const CategoriesLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
