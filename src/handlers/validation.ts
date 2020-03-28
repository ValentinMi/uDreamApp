import * as Yup from "yup";

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

async function validate(schema: Yup.ObjectSchema, form: object) {
  function capitalize(message: string) {
    return message.replace(/^\w/, c => c.toUpperCase());
  }
  try {
    await schema.validate(form);
    return false;
  } catch (error) {
    return capitalize(error.message);
  }
}
