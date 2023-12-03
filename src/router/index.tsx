import Home from "@/Pages/Home/Home";
import Add from "@/features/product/_components/Admin/Add";
import Dashboard from "@/features/product/_components/Admin/Dasboard";
// import Edit from "@/features/product/_components/Admin/Edit";
import ProductDetail from "@/features/product/_components/ProductDetail";
import Signin from "@/features/product/_components/auth/Signin";
import Layout from "@/layout/Layout";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:idProd/view" element={<ProductDetail />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<Add />} />
          {/* <Route path="update/:idProd" element={<Edit />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
