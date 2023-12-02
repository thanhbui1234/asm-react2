import { IProduct } from "@/common/type";
import { addProduct, deleteProduct, updateProduct } from "@/services/product";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

type formInputType = {
  id?: number;
  name?: string;
  price?: number;
};

type useProductMountationProps = {
  action: "ADD" | "UPDATE" | "DELETE";
  defaultValues?: IProduct;
  onSuccess?: () => void;
};
const formAddSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
});

export const useProductMountation = ({
  action,
  defaultValues = { name: "", price: 0 },
  onSuccess,
}: useProductMountationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "ADD": {
          return await addProduct(product);
        }
        case "DELETE": {
          return await deleteProduct(product.id! as number);
        }
        case "UPDATE": {
          console.log(product);
          return await updateProduct(product);
        }
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("PRODUCTS_KEY");
      onSuccess && onSuccess();
    },
  });

  const form = useForm<formInputType>({
    resolver: joiResolver(formAddSchema),
    defaultValues,
  });
  const onSubmit: SubmitHandler<formInputType> = (values: IProduct) => {
    mutate(values);
  };
  const onRemove = (product: IProduct) => {
    mutate(product);
  };

  return {
    onRemove,
    form,
    onSubmit,
    ...rest,
  };
};
