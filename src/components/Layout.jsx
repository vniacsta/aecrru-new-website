import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { navLinks } from "../data/siteData";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
