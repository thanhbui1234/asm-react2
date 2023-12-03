import { formSchema } from "@/common/authSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

type FormAuthType = {
  username: string;
  email: string;
  password: string;
};
type useAuthMoutations = {
  action: "SIGNUP" | "SIGNIN";
  defaultValues: FormAuthType;
  onSuccess: () => void;
};


const useAuthMoutation = ({
  action,
  defaultValues = { username: "", email: "", password: "" },
  onSuccess,
}: useAuthMoutations) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (user) => {
      switch (action) {
        case "SIGNIN":
          break;
        case "SIGNUP":
          break;

        default:
          return null;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
      onSuccess && onSuccess();
    },
    
  }
  const form = useForm<FormAuthType>({
    resolver :joiResolver(formSchema),
  })
  
  );
  return <div>useAuthMoutation</div>;
};

export default useAuthMoutation;
