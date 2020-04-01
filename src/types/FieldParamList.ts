export type FieldParamList = {
  label: string;
  type: "select" | "input" | "password" | "email" | "textarea" | "keywords";
  name: string;
  selectValues?: Array<string>;
  customStyle?: any;
};
