import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/forgot-password",
    "/dashboard",
    "/admin-dashboard",
    "/Dashboard"
  ];

  const hideLayout = hideLayoutRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideLayout && <Header />}

      <main className="mx-auto min-h-[calc(100vh-170px)]">
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;