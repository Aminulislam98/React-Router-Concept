import React from "react";
import Navbar from "../shared/Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "../shared/Footer.jsx";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
