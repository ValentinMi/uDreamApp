import axios from "axios";
import { apiRoutes } from "./config";

type Credentials = {
  email: string;
  password: string;
};

export const authUser = async (credentials: Credentials) => {
  const { data } = await axios.post(apiRoutes.auth, credentials);
  return data;
};
