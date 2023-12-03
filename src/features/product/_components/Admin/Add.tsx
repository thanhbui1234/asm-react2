import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProductMountation } from "@/hooks/useProductMoutation";
import { toast } from "react-toastify";
import { IProduct } from "@/common/type";

const Add = () => {
  const { form, onSubmit, isLoading } = useProductMountation({
    action: "ADD",
    onSuccess: () => {
      toast.success("Thêm thành công");
    },
  });
  const handleOnSubmit = (value: IProduct) => {
    onSubmit(value);
  };

  return (
    <div className="mx-[350px] mt-24">
      <h1 className="text-center font-bold text-2xl">ADD PRODUCT</h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-3"
          onSubmit={form.handleSubmit(handleOnSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="name..." />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="price..." />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">{isLoading ? "Loading..." : "SUBMIT"}</Button>
        </form>
      </Form>
    </div>
  );
};

export default Add;
