import React from "react";
import Form from "./Form";
import { FieldParamList } from "../types/FieldParamList";
import { postDream } from "../api/dreams.api";
import { validateDreamForm } from "../handlers/validation";

interface AddDreamProps {}

const dreamFields: Array<FieldParamList> = [
  { label: "Title", type: "input", name: "title" },
  { label: "Note", type: "input", name: "note" },
  { label: "Description", type: "textarea", name: "description" },
  { label: "Keywords", type: "keywords", name: "keywords" }
];

const AddDream: React.FC<AddDreamProps> = () => {
  return (
    <Form
      fieldsList={dreamFields}
      onSubmit={postDream}
      btnTitle="Submit"
      validation={validateDreamForm}
    />
  );
};

export default AddDream;
