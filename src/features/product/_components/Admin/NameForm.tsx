import { Button } from "@/components/ui/button";
import { FaPenToSquare } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useProductMountation } from "@/hooks/useProductMoutation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IProduct } from "@/common/type";

type NameFromProps = {
  data: IProduct;
};
const NameForm = ({ data }: NameFromProps) => {
  const navigate = useNavigate();
  const { form, onSubmit } = useProductMountation({
    action: "UPDATE",
    onSuccess: () => {
      toast.success("Update thanh cong");
      navigate("/");
    },
  });
  useEffect(() => {
    if (data && form) {
      form.reset({
        name: data?.name,
        price: data?.price,
      });
    }
  }, [data, form]);
  const [editInput, setEditInput] = useState(false);
  const handleOnSubmit = (value: IProduct) => {
    onSubmit({ ...data, ...value });
  };
  return (
    <div className="font-medium  bg-slate-100 p-4 rounded min-h-[200px]">
      <div className="flex justify-between items-center pb-5 ">
        <h1 className="font-bold">Tên sản phẩm</h1>
        {editInput ? (
          <span onClick={() => setEditInput(!editInput)}>
            <GiCancel />
          </span>
        ) : (
          <span onClick={() => setEditInput(!editInput)}>
            <FaPenToSquare></FaPenToSquare>
          </span>
        )}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-8"
        >
          {editInput ? (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name...." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ) : (
            <FormField
              disabled
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name...." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {editInput && <Button type="submit">Update</Button>}
        </form>
      </Form>
    </div>
  );
};

export default NameForm;
