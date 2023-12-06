import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuthMutation from "@/hooks/useAuthMoutation";
import { toast } from "react-toastify";

const Signup = () => {
  const { form, onSubmit } = useAuthMutation({
    action: "SIGN_UP",
    onSuccess: () => {
      toast.success("DANG KY THANH CONG");
    },
  });

  const handleOnSubmit = (value: any) => {
    onSubmit(value);
  };
  return (
    <div className="p-10">
      <h1 className="font-bold text-center text-3xl">REGISTER</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Email của bạn" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Mật khẩu của bạn"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-3" variant="destructive" type="submit">
            Đăng ký
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
