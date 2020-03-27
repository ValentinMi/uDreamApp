export type FieldParamList = {
  label: string;
  type: "select" | "input" | "password" | "email";
  selectValues?: Array<string>;
};
