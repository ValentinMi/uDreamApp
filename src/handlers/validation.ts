import * as Yup from "yup";
import { Dream } from "../types/DreamParamList";
import capitalize from "../utils/capitalize";

export const validateLoginForm = async (form: object) => {
  const schema = Yup.object({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required()
  });

  return validate(schema, form);
};

export const validateRegisterForm = async (form: any) => {
  const schema = Yup.object({
    username: Yup.string()
      .min(4)
      .max(255)
      .required(),
    firstname: Yup.string()
      .min(2)
      .max(255)
      .required(),
    lastname: Yup.string()
      .min(2)
      .max(255)
      .required(),
    email: Yup.string()
      .email()
      .min(4)
      .max(255)
      .required(),
    password: Yup.string()
      .min(8)
      .max(255)
      .required(),
    passwordConfirmation: Yup.string()
      .min(8)
      .max(255)
      .required()
  });

  if (form.password == form.passwordConfirmation) {
    return validate(schema, form);
  } else {
    return "Passwords do not match";
  }
};

export const validateDreamForm = async (form: Dream) => {
  const schema = Yup.object({
    title: Yup.string()
      .min(2)
      .max(255)
      .required(),
    note: Yup.number()
      .min(0)
      .max(5)
      .required(),
    description: Yup.string()
      .min(1)
      .max(3000)
      .required(),
    keywords: Yup.string()
      .min(0)
      .max(100)
  });

  return validate(schema, form);
};

async function validate(schema: Yup.ObjectSchema, form: object) {
  try {
    await schema.validate(form);
    return false;
  } catch (error) {
    console.log(error);
    return capitalize(error.message);
  }
}
