import axios from "axios";
import { apiRoutes } from "./config";

type User = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
};

export const postUser = async (user: User) => {
  const { data } = await axios.post(apiRoutes.users, user);
  console.log(data);
  return data;
};
