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
const schema = Joi.object({
username: Joi.string().alphanum().min(3).max(30).required().message(
 {
   "string.name" : "username khong hop le",
  "any.required" : "khong duoc de trng name "
 }
),
password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

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
    resolver :joiResolver(),
  })
  
  );
  return <div>useAuthMoutation</div>;
};

export default useAuthMoutation;
