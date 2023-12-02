import Home from "@/Pages/Home/Home";
import Add from "@/features/product/_components/Admin/Add";
import Dashboard from "@/features/product/_components/Admin/Dasboard";
import ProductDetail from "@/features/product/_components/ProductDetail";
import Layout from "@/layout/Layout";
import { Edit } from "lucide-react";
import { Route, Routes } from "react-router-dom";

type Props = {};

const Routers = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:idProd/view" element={<ProductDetail />} />
        </Route>
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin/add" element={<Add />} />
          <Route path="admin/products/:idProd/update" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
