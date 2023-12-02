import Nav from "@/components/_homeUi/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
