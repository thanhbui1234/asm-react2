import { IProduct } from "@/common/type";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useProductMountation } from "@/hooks/useProductMoutation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UpdateProduct = (props: any) => {
  const { showUpdate, setShowUpdate, original } = props;

  const { form, isLoading, onSubmit } = useProductMountation({
    action: "UPDATE",
    onSuccess: () => toast.success("updated successfully"),
  });
  useEffect(() => {
    if (original && form) {
      form.reset({
        name: original?.name,
        price: original?.price,
      });
    }
  }, [original, form]);
  const handleOnSubmit = (value: IProduct) => {
    onSubmit({ ...original, ...value });
  };
  return (
    <Dialog open={showUpdate}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>Edit profile</DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleOnSubmit)}
            className="flex flex-col gap-3"
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
            <div className="flex justify-around">
              <Button
                variant={"destructive"}
                onClick={() => setShowUpdate(!showUpdate)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {isLoading ? "Loading..." : "SUBMIT"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
