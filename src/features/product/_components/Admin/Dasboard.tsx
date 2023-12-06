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

import { SkeletonDemo } from "./SkeletonLoading";
import { IProduct } from "@/common/type";
import { CiCirclePlus } from "react-icons/ci";
import ComfirmBtn from "./Comfirm";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";

const getColum = (): ColumnDef<IProduct>[] => [
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
      const [show, setShow] = useState(false);
      const [showUpdate, setShowUpdate] = useState(false);

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
                <Button onClick={() => setShowUpdate(true)} variant={"green"}>
                  UPDATE
                </Button>
                <Button onClick={() => setShow(true)} variant={"destructive"}>
                  DELETE
                </Button>

                <Link to={`/products/${original.id}/view`}>
                  <Button>Xem</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {showUpdate && (
            <UpdateProduct
              showUpdate={showUpdate}
              setShowUpdate={setShowUpdate}
              original={original}
            />
          )}

          <ComfirmBtn show={show} original={original} setShow={setShow} />
        </>
      );
    },
  },
];

const Dashboard = () => {
  const { isLoading, isError, data } = useProductQuery();

  const columns = getColum();

  if (isLoading)
    return (
      <div>
        <SkeletonDemo />
      </div>
    );
  if (isError) return <div>Error....</div>;

  return (
    <div>
      <p className="flex justify-end cursor-pointer transition-transform">
        <Link className=" " to={"add"}>
          <CiCirclePlus size="30px" className="m-5" />
        </Link>
      </p>
      <h1
        className="text-3xl text-center font-bold
      
      
      "
      >
        LIST
      </h1>
      <DataTable columns={columns} data={data as IProduct[]} />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
