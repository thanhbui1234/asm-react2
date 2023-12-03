import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useProductMountation } from "@/hooks/useProductMoutation";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { toast } from "react-toastify";

const ComfirmBtn = ({ show, setShow, original }: any) => {
  const { onRemove } = useProductMountation({
    action: "DELETE",
    onSuccess: () => {
      toast.success("Deleted successfully");
    },
  });
  const handleClick = () => {
    onRemove(original);
    setShow(false);
  };
  return (
    <AlertDialog open={show}>
      <AlertDialogTrigger asChild={show}></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you want to delete product has name {original?.name}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShow(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => handleClick()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ComfirmBtn;
