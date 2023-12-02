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
    <div>
      <h1>hê</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
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
          {isLoading ? "loading" : <Button type="submit">Submit</Button>}
        </form>
      </Form>
    </div>
  );
};

export default Add;
