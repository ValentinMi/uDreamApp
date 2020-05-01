import axios from "axios";
import { apiRoutes } from "./config";
import { Dream } from "../types/DreamParamList";
import capitalize from "../utils/capitalize";

export const postDream = async (dream: Dream) => {
  try {
    const dreamToPost = {
      ...dream,
      keywords: dream.keywords.split(" ").map((keyword: string) => {
        return capitalize(keyword);
      })
    };

    const { data } = await axios.post(apiRoutes.dreams, dreamToPost);
    return data;
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
};

export const getUserDreams = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `${apiRoutes.dreams}/userDreams/${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
};
