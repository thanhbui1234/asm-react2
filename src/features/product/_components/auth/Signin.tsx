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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = useAuthMutation({
    action: "SIGN_IN",
    onSuccess: () => {
      toast.success("DANG NHAP THANH CONG");
    },
  });
  return (
    <div className="p-10">
      <h1 className="font-bold text-center text-3xl">LOGIN</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
            Đăng nhập
          </Button>
          <p>
            You do not have accout{" "}
            <span className="text-cyan-600">
              <Link to="/signup">register</Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Signin;
