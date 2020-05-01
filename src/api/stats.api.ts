import axios from "axios";
import { apiRoutes } from "./config";

export const getUserDreamStats = async () => {
  try {
    const { data } = await axios.get(`${apiRoutes.stats}/dreams`);
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
