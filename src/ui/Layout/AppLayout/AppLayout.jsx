import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import "./AppLayout.scss";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

/* eslint-disable react/prop-types */
export default function AppLayout() {
  return (
    <>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
