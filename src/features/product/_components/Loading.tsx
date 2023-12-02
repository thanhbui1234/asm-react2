import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@radix-ui/react-label";
import { Link } from "lucide-react";

export function Loadinghome() {
  return (
    <>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:px-[300px] lg:px-[150px]">
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] mx-auto mt-3">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <Skeleton className="h-12  w-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  <Skeleton className="rounded-full" />
                </Label>
                <Skeleton className="rounded-full" />
              </div>

              <Button variant={"ghost"}>
                {" "}
                <Skeleton className="rounded-full" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
