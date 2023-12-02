import { useProductQuery } from "@/hooks/useProductQuery";
import { Outlet, Link } from "react-router-dom";
import { DataTable } from "./Datatable";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useProductMountation } from "@/hooks/useProductMoutation";
import { SkeletonDemo } from "./SkeletonLoading";
import { toast } from "react-toastify";
import { IProduct } from "@/common/type";

const getColum = (onRemove: any): ColumnDef<IProduct>[] => [
  {
    header: "STT",
    cell: ({ row: { id } }) => {
      return +id + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    header: "Action",
    id: "action",
    cell: ({ row: { original } }) => {
      const handelRemove = (product: IProduct) => {
        onRemove(product);
      };
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex gap-3">
                <Link to={`/products/${original.id}/update`}>
                  <Button variant={"green"}>Sửa</Button>
                </Link>
                <Button
                  onClick={() => handelRemove(original)}
                  variant={"destructive"}
                >
                  DELETE
                </Button>
                <Link to={`/products/${original.id}/view`}>
                  <Button>Xem</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];

const Dashboard = () => {
  const { isLoading, isError, data } = useProductQuery();
  const { onRemove }: any = useProductMountation({
    action: "DELETE",
    onSuccess: () => {
      toast.success("deleted successfully");
    },
  });
  const columns = getColum(onRemove);

  if (isLoading)
    return (
      <div>
        <SkeletonDemo />
      </div>
    );
  if (isError) return <div>Error....</div>;

  return (
    <div>
      <DataTable columns={columns} data={data as IProduct[]} />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
