import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@radix-ui/react-label";
import { Link } from "lucide-react";

const LoadingDetail = (props: Props) => {
  return (
    <Card className="w-[550px] mx-auto mt-[200px]">
      <CardHeader>
        <CardTitle>DETAIL PRODUCTS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Skeleton className="h-10  w-full" />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Skeleton className="h-10  w-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingDetail;
