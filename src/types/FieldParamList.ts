export type FieldParamList = {
  label: string;
  type: "select" | "input" | "password" | "email";
  name: string;
  selectValues?: Array<string>;
};
