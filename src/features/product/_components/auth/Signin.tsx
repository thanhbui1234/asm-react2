import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "react-router-dom";
type Props = {};

const Signin = () => {
  return (
    <>
      <Card className="w-[550px] mt-28 mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default Signin;
