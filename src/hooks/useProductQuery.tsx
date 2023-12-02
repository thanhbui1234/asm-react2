import { getAll, getOne } from "@/services/product";
import { useQuery } from "react-query";

export const useProductQuery = (productId?: number) => {
  const { data, ...res } = useQuery({
    queryKey: productId ? ["PRODUCTS_KEY", productId] : ["PRODUCTS_KEY"],
    queryFn: async () => (productId ? getOne(productId) : getAll()),
  });
  return { data, ...res };
};
