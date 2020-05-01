import React, { useContext } from "react";
import Form from "./Form";
import { FieldParamList } from "../types/FieldParamList";
import { postDream } from "../api/dreams.api";
import { validateDreamForm } from "../handlers/validation";
import { LoadingContext } from "../LoadingProvider";

interface AddDreamProps {}

const dreamFields: Array<FieldParamList> = [
  { label: "Date", type: "date", name: "date" },
  { label: "Title", type: "input", name: "title" },
  { label: "Note", type: "input", name: "note" },
  { label: "Description", type: "textarea", name: "description" },
  { label: "Keywords", type: "keywords", name: "keywords" },
];

const AddDream: React.FC<AddDreamProps> = () => {
  const { setIsLoading } = useContext(LoadingContext);

  const handlePostDream = async (form: any) => {
    setIsLoading(true);
    await postDream(form);
    setIsLoading(false);
  };
  return (
    <Form
      fieldsList={dreamFields}
      onSubmit={handlePostDream}
      btnTitle="Submit"
      validation={validateDreamForm}
    />
  );
};

export default AddDream;
