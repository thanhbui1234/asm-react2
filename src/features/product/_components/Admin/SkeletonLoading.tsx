import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <>
      <h1>Hello mấy cưng</h1>
      <div className=" flex flex-col gap-2 ">
        <Skeleton className="rounded-full" />
        <Skeleton className="h-12  w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </>
  );
}
