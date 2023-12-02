import { IProduct } from "@/common/type";
import { useProductQuery } from "@/hooks/useProductQuery";
import React from "react";
import { useParams } from "react-router-dom";
import NameForm from "./NameForm";
import PriceForm from "./PriceForm";

type Props = {};

const Edit = (props: Props) => {
  const { idProd } = useParams();
  const { data } = useProductQuery(+idProd!);
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <NameForm data={data as IProduct} />
      <PriceForm data={data as IProduct} />
    </div>
  );
};

export default Edit;
