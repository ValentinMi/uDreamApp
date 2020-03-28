import axios from "axios";
import { apiRoutes } from "./config";
import { Credentials } from "../types/AuthParamList";

export const authUser = async (credentials: Credentials) => {
  try {
    const { data } = await axios.post(apiRoutes.auth, credentials);
    return data;
  } catch (error) {
    console.log(error);
    throw Error("Invalid email or password");
  }
};
