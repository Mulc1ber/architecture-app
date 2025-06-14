import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Loading } from "../../ui";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
