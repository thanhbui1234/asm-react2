import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductQuery } from "@/hooks/useProductQuery";
import { IProduct } from "@/common/type";
import { Link } from "react-router-dom";
import { Loadinghome } from "./Loading";
type data = {
  id: number;
  name: string;
  price: number;
};

const HomeView = () => {
  const { data, isLoading } = useProductQuery();
  if (isLoading) {
    return (
      <>
        <Loadinghome></Loadinghome>
      </>
    );
  }
  return (
    <>
      {data?.map((product: data, index: number) => {
        return (
          <Card key={index} className="w-[300px] mx-auto mt-3">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Name of your project"
                    defaultValue={product.name}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Input
                    id="name"
                    defaultValue={product.price}
                    placeholder="Name of your project"
                  />
                </div>

                <Link to={`products/${product.id}/view`}>
                  <Button variant={"ghost"}> VIEW</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default HomeView;
