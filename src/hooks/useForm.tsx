import { useState } from "react";

const useForm = (): [
  any,
  (key: string, value: string | number | Date) => void,
] => {
  const [formValues, setFormValues] = useState<object>({});

  const onChange = (key: string, value: string | number | Date) => {
    setFormValues((form) => (form = { ...form, [key]: value }));
  };

  return [formValues, onChange];
};

export default useForm;
