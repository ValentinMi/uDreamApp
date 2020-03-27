import { useState } from "react";

const useForm = (
  initalValues: object
): [object, (key: string, value: string | number) => void] => {
  const [formValues, setFormValues] = useState<object>(initalValues);

  const onChange = (key: string, value: string | number) => {
    setFormValues(form => (form = { ...form, [key]: value }));
  };

  return [formValues, onChange];
};

export default useForm;
