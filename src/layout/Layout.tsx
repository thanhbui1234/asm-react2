import Nav from "@/components/_homeUi/Nav";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className=" ">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
