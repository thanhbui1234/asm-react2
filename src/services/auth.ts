import { IUser } from "@/common/type";
import instance from "@/core/api";

export const signup = async (user: IUser) => {
  console.log(user);

  try {
    const response = await instance.post(`/users`, user);
    return response.data || {};
  } catch (error) {
    console.log("CREATE_USER_ERROR", error);
  }
};
export const signin = async (user: IUser) => {
  try {
    const response = await instance.post(`/users`, user);
    return response.data;
  } catch (error) {
    console.log("SIGIN_USER_ERROR", error);
  }
};
