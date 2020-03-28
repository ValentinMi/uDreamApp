import { useState } from "react";

const useForm = (): [object, (key: string, value: string | number) => void] => {
  const [formValues, setFormValues] = useState<object>({});

  const onChange = (key: string, value: string | number) => {
    setFormValues(form => (form = { ...form, [key]: value }));
  };

  return [formValues, onChange];
};

export default useForm;
