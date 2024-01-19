import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import "./AppLayout.scss";
import Footer from "../Footer/Footer";

/* eslint-disable react/prop-types */
export default function AppLayout() {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: "50rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
