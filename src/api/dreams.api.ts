import axios from "axios";
import { apiRoutes } from "./config";
import { Dream } from "../types/DreamParamList";
import capitalize from "../utils/capitalize";

export const postDream = async (dream: Dream) => {
  try {
    const dreamToPost = {
      ...dream,
      keywords: dream.keywords
        .split(" ")
        .map((keyword: string) => capitalize(keyword))
    };
    const { data } = await axios.post(apiRoutes.dreams, dreamToPost);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
