import axios from "axios";
import { apiRoutes } from "./config";

type registerForm = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const postUser = async (userForm: registerForm) => {
  try {
    const user = {
      username: userForm.username,
      firstname: userForm.firstname,
      lastname: userForm.lastname,
      email: userForm.email,
      password: userForm.password
    };
    const { data } = await axios.post(apiRoutes.users, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};
